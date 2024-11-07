class PermuteInput(nn.Module):
    def __init__(self):
        super(PermuteInput, self).__init__()

    def forward(self, x):
        # Permute from (batch, height, width, channels) to (batch, channels, height, width)
        return x.permute(0, 3, 1, 2)

class HandleOutput(nn.Module):
    def __init__(self):
        super(HandleOutput, self).__init__()

    def forward(self, x):
        return F.normalize(x) 

# Add the custom reshape layer to the model
# Here, we use a Sequential container to append the reshape layer after the adaptive average pooling layer
resnet50_with_reshape = nn.Sequential(
    PermuteInput(),
    resnet50,
    HandleOutput()
)

# Print the modified model architecture
print(resnet50_with_reshape)