########################################## INFERENCE ############################################

# Load the TFLite model and allocate tensors
interpreter = tf.lite.Interpreter(model_path="/home/ai-edge/resnet50.tflite")
interpreter.allocate_tensors()

# Get input and output tensors
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Get input shape
input_shape = input_details[0]['shape']

# Load and preprocess the image
image = Image.open('/home/ai-edge/car.jpeg')

preprocess = transforms.Compose([
    transforms.Resize(224),
    transforms.CenterCrop(224),
    transforms.ToTensor(),  # Converts to float32 and scales to [0, 1]
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

img_tensor = preprocess(image)  # img_tensor is now a FloatTensor with shape (3, 224, 224)
img_tensor = img_tensor.unsqueeze(0).permute(0,2,3,1)  # Shape: (1, 3, 224, 224)

# Convert img_tensor to numpy array and ensure it matches the expected dtype (uint8)
img_numpy = img_tensor.numpy()
img_numpy = img_numpy.astype(np.float32)

# Set the tensor to the interpreter
interpreter.set_tensor(input_details[0]['index'], img_numpy)

# Run inference
interpreter.invoke()

# Get the output tensor
output_data = interpreter.get_tensor(output_details[0]['index'])

# Print the output
print("Output:", output_data)

# Apply softmax to the output data
probabilities = tf.nn.softmax(output_data[0])
# Find the index of the highest probability
predicted_class = np.argmax(probabilities)

# Load class labels - get this from Github
with open('/home/imagenet_class_index.json') as f:
    class_idx = json.load(f)

# Now `class_idx` is a dictionary of class names
print(class_idx[str(predicted_class)][1])