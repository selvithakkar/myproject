from django.contrib import admin
# Register your models here.
# from django.contrib import admin
from .models import Medicine
from .models import Employee
from .models import signIn
from .models import InvenDetails

@admin.register(Medicine)
class medicineAdmin(admin.ModelAdmin):
    list_display = Medicine.DisplayFields 
    search_fields = Medicine.SearchableFields
    list_filter = Medicine.FilterFields


@admin.register(InvenDetails)
class detailsAdmin(admin.ModelAdmin):
    list_display = InvenDetails.DisplayFields 
    search_fields = InvenDetails.SearchableFields
    list_filter = InvenDetails.FilterFields


@admin.register(Employee)
class empAdmin(admin.ModelAdmin):
    list_display = Employee.DisplayFields 
    search_fields = Employee.SearchableFields
    list_filter = Employee.FilterFields


@admin.register(signIn) 
class signINadmin(admin.ModelAdmin):
    list_display = signIn.DisplayFields
    search_fields = signIn.SearchableFields
    list_filter = signIn.FilterFields
