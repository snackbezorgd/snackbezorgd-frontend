from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from snackbezorgd_app import views

router = routers.DefaultRouter()
router.register(r'snackbezorgd', views.SnackBezorgdView, 'snackbezorgd')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]