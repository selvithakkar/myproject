# Generated by Django 5.0.3 on 2024-03-17 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medisync', '0007_remove_medicine_final_stock'),
    ]

    operations = [
        migrations.CreateModel(
            name='trackMedicine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicine_id', models.CharField(max_length=100)),
                ('stock_out', models.IntegerField(default=0)),
            ],
        ),
    ]
