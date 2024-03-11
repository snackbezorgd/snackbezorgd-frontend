from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = product  
        fields = ('product_number', 'title', 'description', 'price', 'active')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = order 
        fields = ('order_number', 'first_name', 'last_name', 'email', 'time', 'paid', 'finished', 'products', 'total')

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderItem 
        fields = ('order', 'product', 'quantity', 'subtotal')