# Generated by Django 5.0.2 on 2024-03-05 10:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snackbezorgd_app', '0016_order_order_number_alter_order_ordernr'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='ordernr',
        ),
    ]