from django.contrib import admin
from .models import product

class SnackBezorgdAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'price', 'active')

# Register your models here.

admin.site.register(product, SnackBezorgdAdmin)