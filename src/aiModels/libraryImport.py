import torch
import torchvision
import ai_edge_torch
from PIL import Image
import torchvision.transforms as transforms
import tensorflow as tf
import numpy as np
from torch.ao.quantization.quantize_pt2e import prepare_pt2e, convert_pt2e
from torch._export import capture_pre_autograd_graph
from ai_edge_torch.quantize.pt2e_quantizer import get_symmetric_quantization_config
from ai_edge_torch.quantize.pt2e_quantizer import PT2EQuantizer
from ai_edge_torch.quantize.quant_config import QuantConfig
import json
import torch.nn as nn
import torchvision.models as models
import torch.nn.functional as F