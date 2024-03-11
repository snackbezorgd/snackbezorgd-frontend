from django.contrib import admin
from .models import *

class OrderItemInline(admin.TabularInline):
    model = orderItem
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_number', 'first_name', 'last_name', 'email', 'time', 'paid', 'finished', 'display_products', 'total')

    def display_products(self, obj):
        return ", ".join([item.product.title for item in obj.orderitem_set.all()])

    display_products.short_description = 'Products'

    inlines = [OrderItemInline]

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'subtotal')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_number', 'title', 'description', 'price', 'active')

admin.site.register(product, ProductAdmin)
admin.site.register(order, OrderAdmin)
admin.site.register(orderItem, OrderItemAdmin)
