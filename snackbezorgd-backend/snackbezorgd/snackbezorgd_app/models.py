from django.db import models

class order(models.Model):
    order_number = models.CharField(max_length=10, unique=True, editable=False)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    time = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)
    products = models.ManyToManyField('Product', through='OrderItem')
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

        super().save(*args, **kwargs)

    @property
    def calculate_total(self):
        return sum(order_item.subtotal for order_item in self.orderitem_set.all())

    @property
    def total(self):
        return self.calculate_total

    def __str__(self):
        return f"{self.order_number}"

class product(models.Model):
    product_number = models.CharField(max_length=10, unique=True, editable=False)
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.product_number:
            prefix = 'P2400'
            last_product = product.objects.last()
            if last_product:
                last_product_number = last_product.product_number
                product_number_suffix = str(int(last_product_number[-3:]) + 1).zfill(3)
            else:
                product_number_suffix = '001'

            self.product_number = f"{prefix}{product_number_suffix}"
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class orderItem(models.Model):
    order = models.ForeignKey(order, on_delete=models.CASCADE)
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    subtotal = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.subtotal = self.product.price * self.quantity
        return super().save(*args, **kwargs)
