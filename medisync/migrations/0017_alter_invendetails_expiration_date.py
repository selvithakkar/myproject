# Generated by Django 5.0.3 on 2024-03-25 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medisync', '0016_alter_invendetails_batch_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invendetails',
            name='expiration_date',
            field=models.DateField(),
        ),
    ]