from django.db import models


# Create your models here.

class product(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    active = models.BooleanField(default=True)

    def _str_(self):
        return self.title
    
class order(models.Model):
    order_number = models.CharField(max_length=10, unique=True, editable=False)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    time = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)
    total = models.DecimalField(max_digits=8, decimal_places=2)

    def save(self, *args, **kwargs):
        if not self.order_number:
            prefix = 'E2400'
            last_order = order.objects.last()
            if last_order:
                last_order_number = last_order.order_number
                order_number_suffix = str(int(last_order_number[-3:]) + 1).zfill(3)
            else:
                order_number_suffix = '001'
                
            self.order_number = f"{prefix}{order_number_suffix}"
        return super().save(*args, **kwargs)


    def _str_(self):
        return self.title