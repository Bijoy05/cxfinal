pt2e_quantizer = PT2EQuantizer().set_global(
    get_symmetric_quantization_config(is_per_channel=True, is_dynamic=True))

pt2e_torch_model = capture_pre_autograd_graph(resnet50_with_reshape.eval(),sample_input)
pt2e_torch_model = prepare_pt2e(pt2e_torch_model, pt2e_quantizer)

# Run the prepared model with sample input data to ensure that internal observers are populated with correct values
pt2e_torch_model(*sample_input)

# Convert the prepared model to a quantized model
pt2e_torch_model = convert_pt2e(pt2e_torch_model, fold_quantize=False)

# Convert to an ai_edge_torch model
pt2e_drq_model = ai_edge_torch.convert(pt2e_torch_model, sample_input, quant_config=QuantConfig(pt2e_quantizer=pt2e_quantizer))
pt2e_drq_model.export("/home/user/resnet50_quantized.tflite"