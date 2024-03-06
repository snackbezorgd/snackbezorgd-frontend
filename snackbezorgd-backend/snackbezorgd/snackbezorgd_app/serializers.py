from rest_framework import serializers
from .models import *

class SnackBezorgdSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ('id', 'title', 'description', 'price', 'active')
    class Meta:
        model = order
        fields = ('order_number', 'first_name', 'last_name', 'email', 'time', 'paid', 'finished', 'total')