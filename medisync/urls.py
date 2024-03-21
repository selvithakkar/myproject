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

    path('edit_entry/<int:medicine_id>/<int:entry_id>/', views.edit_entry, name='edit_entry'),

]
