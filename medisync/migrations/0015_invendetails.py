# Generated by Django 5.0.3 on 2024-03-24 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medisync', '0014_excelfileupload'),
    ]

    operations = [
        migrations.CreateModel(
            name='InvenDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicine_name', models.CharField(max_length=100)),
                ('medicine_id', models.PositiveIntegerField()),
                ('medicine_company', models.CharField(max_length=100)),
                ('medicine_cost', models.PositiveIntegerField()),
                ('expiration_date', models.DateField(auto_now_add=True)),
                ('batch_number', models.PositiveIntegerField()),
                ('supplier_id', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'InventoryDetails',
            },
        ),
    ]
