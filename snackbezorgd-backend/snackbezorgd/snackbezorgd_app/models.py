from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 

# Create your models here.

class product(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(100)], default=0)
    active = models.BooleanField(default=True)

    def _str_(self):
        return self.title