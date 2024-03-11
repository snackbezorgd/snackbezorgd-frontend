from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *


class SnackBezorgdView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()

class OrderAdmin(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = order.objects.all()

class OrderItemAdmin(viewsets.ModelViewSet):
    serializer_class = OrderItemSerializer
    queryset = orderItem.objects.all()
