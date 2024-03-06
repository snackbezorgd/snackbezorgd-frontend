from django.contrib import admin
from .models import product, order  # Make sure to import the 'Order' model

class SnackBezorgdAdmin(admin.ModelAdmin):
    list_display = ('product_number', 'title', 'description', 'price', 'active')

class OrderAdmin(admin.ModelAdmin):  # Create a new admin class for the 'Order' model if needed
    list_display = ('order_number', 'first_name', 'last_name', 'email', 'time', 'paid', 'finished', 'total')

# Register your models here.
admin.site.register(product, SnackBezorgdAdmin)
admin.site.register(order, OrderAdmin)  # Register the 'Order' model and the admin class
