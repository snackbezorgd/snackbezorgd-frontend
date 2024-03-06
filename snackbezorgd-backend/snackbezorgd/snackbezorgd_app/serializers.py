from rest_framework import serializers
from .models import product

class SnackBezorgdSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ('id', 'title', 'description', 'price', 'active')