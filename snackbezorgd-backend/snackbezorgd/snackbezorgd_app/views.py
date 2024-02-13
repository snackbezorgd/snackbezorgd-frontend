from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SnackBezorgdSerializer
from .models import SnackBezorgd

# Create your views here.

class SnackBezorgdView(viewsets.ModelViewSet):
    serializer_class = SnackBezorgdSerializer
    queryset = SnackBezorgd.objects.all()