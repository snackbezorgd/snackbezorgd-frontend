# Generated by Django 5.0.2 on 2024-03-05 23:04

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snackbezorgd_app', '0020_order_finished_alter_order_paid_alter_order_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.CharField(default=django.utils.timezone.now, max_length=120),
            preserve_default=False,
        ),
    ]