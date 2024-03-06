from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SnackBezorgdSerializer
from .models import *

# Create your views here.

class SnackBezorgdView(viewsets.ModelViewSet):
    serializer_class = SnackBezorgdSerializer
    queryset = product.objects.all()

class OrderAdmin(viewsets.ModelViewSet):
    serializer_class = SnackBezorgdSerializer
    queryset = order.objects.all()

    