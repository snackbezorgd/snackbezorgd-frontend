from django.db import models


# Create your models here.

class product(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    active = models.BooleanField(default=True)

    def _str_(self):
        return self.title