from rest_framework import serializers
from .models import SnackBezorgd

class SnackBezorgdSerializer(serializers.ModelSerializer):
    class Meta:
        model = SnackBezorgd
        fields = ('id', 'title', 'description', 'completed')