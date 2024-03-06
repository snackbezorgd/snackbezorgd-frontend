from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.

class SnackBezorgdView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()

class OrderAdmin(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = order.objects.all()

    