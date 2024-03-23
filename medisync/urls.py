from django.contrib import admin
from django.urls import path, include
from . import views

from .views import store_inventory_report

urlpatterns = [
    path('',views.home,name='home'),
    path('signin',views.signin,name='signin'),
    path('signup',views.signup,name='signup'),
    path('dashboard',views.dashboard, name="dashboard"),
    path('report',views.report, name="report"),
    path('stocktrack',views.stocktrack, name="stocktrack"),    
    path('inventory',views.inventory, name="inventory"),    
    path('InventoryDetails',views.InventoryDetails, name='InventoryDetails'),
    path('addmedicine',views.addmedicine,name="addmedicine"),
    path('inventoryhome',views.inventoryhome,name="inventoryhome"),
    path('employee',views.employee,name="employee"),
    path('customer',views.customer,name="customer"),


    path('edit_entry/<int:medicine_id>/<int:entry_id>/', views.edit_entry, name='edit_entry'),

]
