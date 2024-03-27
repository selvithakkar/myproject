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
    
class InvenDetails(models.Model):
    medicine_name = models.CharField(max_length=100)
    medicine_id = models.CharField(max_length=100)
    medicine_company = models.CharField(max_length=100)
    medicine_cost = models.PositiveIntegerField()
    expiration_date = models.DateField(auto_now_add=False)
    batch_number = models.CharField(max_length=100)
    supplier_id = models.CharField(max_length=100)
    DisplayFields = ['medicine_name','medicine_id','medicine_company','medicine_cost','expiration_date','batch_number','supplier_id']
    SearchableFields = ['medicine_name','medicine_id','medicine_company'] 
    FilterFields = ['batch_number','supplier_id'] 
    class Meta:
        db_table = 'InventoryDetails'
    def __str__(self):
        return self.medicine_name



class PurchaseOrder(models.Model):
    order_id = models.CharField(max_length=100)
    order_date = models.DateField(auto_now_add=False)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    medicine_id = models.CharField(max_length=100)
    supplier_id = models.CharField(max_length=100)
    quantity_ordered = models.IntegerField()
    transaction_id = models.CharField(max_length=100)
    # transaction_id = models.CharField(max_length=100)
    transaction_type = models.CharField(max_length=100)
    invoice_date = models.DateField(auto_now_add=False)
    supplier_email = models.EmailField()

    DisplayFields = ['order_id','order_date','total_cost','unit_price','medicine_id','supplier_id','quantity_ordered','transaction_id','transaction_type','invoice_date','supplier_email']
    SearchableFields = ['order_id','medicine_id','supplier_id','transaction_id','supplier_email'] 
    FilterFields = ['invoice_date','order_date'] 
    class Meta:
        db_table = 'Purchase Order'
    def __str__(self):
        return self.order_id 

# ////////////////
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