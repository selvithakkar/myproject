# Generated by Django 5.0.3 on 2024-03-16 14:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medisync', '0004_employee_econtact_no_employee_eid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='medicine',
            old_name='total_stock',
            new_name='final_stock',
        ),
    ]
