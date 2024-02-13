from django.contrib import admin
from .models import SnackBezorgd

class SnackBezorgdAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(SnackBezorgd, SnackBezorgdAdmin)