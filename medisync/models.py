from django.db import models

class signIn(models.Model):
    username = models.CharField(max_length=100,null=True,blank=True)
    password = models.CharField(max_length=100,null=True,blank=True)
    DisplayFields = ['username','password']
    SearchableFields = ['username','password'] 
    FilterFields = ['username']
    class Meta:
        db_table = 'SignIn'


# Create your models here.
# In your Django app's models.py file
class InventoryReport(models.Model):
    selected_medicine = models.CharField(max_length=100)
    initial_stock = models.IntegerField()
    stock_in = models.IntegerField()
    stock_out = models.IntegerField()
    final_stock = models.IntegerField()
    # final_stock = initial_stock + stock_in - stock_out
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.selected_medicine} - {self.created_at}"

# from django.db import models

class Medicine(models.Model):
    name = models.CharField(max_length=100)
    Initial_stock = models.PositiveIntegerField()
    Stock_in = models.PositiveIntegerField()
    Stock_out = models.PositiveIntegerField()
    DisplayFields = ['name','Initial_stock','Stock_in','Stock_out']
    SearchableFields = ['name'] 
    FilterFields = ['name'] 
    class Meta:
        db_table = 'Medicine'
    def __str__(self):
        return self.name
    
class Employee(models.Model):
    euser = models.CharField(max_length=100)
    eid = models.CharField(max_length=100)
    econtact_no = models.PositiveIntegerField()
    joining_date = models.DateField(auto_now_add=True)
    epassw = models.CharField(max_length=100)
    DisplayFields = ['euser','eid','econtact_no','joining_date','epassw']
    SearchableFields = ['euser','eid'] 
    FilterFields = ['joining_date'] 
    class Meta:
        db_table = 'Employee'
    def __str__(self):
        return self.euser
    
# /////////////
# ////////////// stock track 
from django.db import models

class Stocktrack(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class MedicineHistory(models.Model):
    medicine = models.ForeignKey(Medicine, on_delete=models.CASCADE)
    stock_in = models.IntegerField()
    stock_out = models.IntegerField()
    total_stock = models.IntegerField()
    total_sales = models.IntegerField()

    def __str__(self):
        return f"{self.medicine.name} - {self.total_stock}"


# ///////////////
# /////////////// import export excel sheet using pandas csv form 
class ExcelFileUpload(models.Model):
    excel_file_upload = models.FileField(upload_to="excel") 