from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User  
from django.contrib import messages
import re
from django.http import JsonResponse
import io
import base64
import matplotlib.pyplot as plt
from django.template.loader import get_template

# Create your views here.
def home(request):
    # return HttpResponse("Hello I am working")
    return render(request,"authentication/index.html") 

def dashboard(request):
    return render(request,"authentication/dashboard.html")

def report(request):
    return render(request,"authentication/report.html")

def stocktrack(request):
    return render(request,"authentication/stocktrack.html")

def inventory(request):
    return render(request,"authentication/inventory.html")

def InventoryDetails(request):
    return render(request,"authentication/InventoryDetails.html")

def addmedicine(request):
    return render(request,"authentication/addmedicine.html")

def inventoryhome(request):
    return render(request, "authentication/inventoryhome.html")

def employee(request):
    return render(request,"authentication/employee.html")

def customer(request):
    return render(request,"authentication/customer.html")

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password'] 

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request,user)
            username = user.first_name 
            return render (request,"authentication/dashboard.html",{'username':username})
        else:
            # messages.error(request,"Bad Credentials!")
            return redirect('home')     
        
    return render(request,"authentication/signin.html")

    # return render(request,"authentication/signin.html")



def signup(request):
    
    if request.method == "POST":
        # username = request.POST.get('username')
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        repassword = request.POST['repassword']

        if User.objects.filter(username=username):
            # messages.error(request,"Username already exists! Please try other username")
            return redirect('home')
        
        if User.objects.filter(email=email):
            # messages.error(request,"Email already registered")
            return redirect('home')
        
        # Username validation
        if len(username)>8:
            # messages.error(request,"Username must be under 10 charactes")
            return redirect('home')
        elif not username.isalnum():
            # messages.error(request,"Username must be alpha-numeric")
            return redirect('home')
        elif not re.match("^[a-zA-Z0-9_]*$",username):
            # messages.error(request, "Username can only contain letters, numbers, and underscores")
            return redirect('home')
        
        # Password validation
        if len(password) < 8:
            # messages.error(request, "Password must be at least 8 characters long")
            return redirect('home')
        elif not re.search("[a-z]", password):
            # messages.error(request, "Password must contain at least one lowercase letter")
            return redirect('home')
        elif not re.search("[A-Z]", password):
            # messages.error(request, "Password must contain at least one uppercase letter")
            return redirect('home')
        elif not re.search("[0-9]", password):
            # messages.error(request, "Password must contain at least one digit")
            return redirect('home')
        elif not re.search("[_@$]", password):
            # messages.error(request, "Password must contain at least one special character (_@$)")
            return redirect('home')
        elif password != repassword:
            # messages.error(request, "Passwords didn't match")
            return redirect('home')


        if password != repassword:
            messages.error(request,"Passwords didn't match")

        if not username.isalnum():
            # messages.error(request,"Username must be Alpha-numeric!")
            return redirect('home')
        

        myuser = User.objects.create_user(username,email,password) 
        myuser.first_name = username
        myuser.last_name = email

        # myuser.is_active=False
        myuser.save() 

        return redirect('signin')
    return render(request,"authentication/signup.html")


# 
# ////////////////////////
# //////////////////////////////
# // report.js
# In your Django app's views.py file

from .models import InventoryReport

# def InventoryReport(request):
#     if request.method == 'POST':
#         # Extract data from the POST request
#         selected_medicine = request.POST.get('selected_medicine')
#         initial_stock = int(request.POST.get('initial_stock'))
#         stock_in = int(request.POST.get('stock_in'))
#         stock_out = int(request.POST.get('stock_out'))
#         final_stock = int(request.POST.get('final_stock'))
        
#         # Create and save the InventoryReport instance
#         inventory_report = InventoryReport.objects.create(
#             selected_medicine=selected_medicine,
#             initial_stock=initial_stock,
#             stock_in=stock_in,
#             stock_out=stock_out,
#             final_stock=final_stock,
#         )
        
#         return JsonResponse({'message': 'Inventory report saved successfully'})
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405)


def store_inventory_report(request):
    if request.method == 'POST':
        # Extract data from the POST request
        selected_medicine = request.POST.get('selected_medicine')
        initial_stock = int(request.POST.get('initial_stock'))
        stock_in = int(request.POST.get('stock_in'))
        stock_out = int(request.POST.get('stock_out'))
        final_stock = int(request.POST.get('final_stock'))

        # Extract admin credentials from the POST request
        admin_username = request.POST.get('admin_username')
        admin_password = request.POST.get('admin_password')

        # Validate admin credentials
        if admin_username == 'tirthshah' and admin_password == '8888':  # Check against predefined values
            # Create and save the InventoryReport instance
            inventory_report = InventoryReport.objects.create(
                selected_medicine=selected_medicine,
                initial_stock=initial_stock,
                stock_in=stock_in,
                stock_out=stock_out,
                final_stock = initial_stock + stock_in - stock_out,
            )

            return JsonResponse({'message': 'Inventory report saved successfully'})
        else:
            return JsonResponse({'error': 'Unauthorized. This action is accessible for admin only.'}, status=401)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def generate_report_and_chart(request):
    if request.method == 'POST':
        # Extract data from the POST request
        initial_stock = int(request.POST.get('initial_stock'))
        stock_in = int(request.POST.get('stock_in'))
        stock_out = int(request.POST.get('stock_out'))
        final_stock = int(request.POST.get('final_stock'))

    if(request.method=='GET'):
        selected_medicine=selected_medicine,
        initial_stock=initial_stock,
        stock_in=stock_in,
        stock_out=stock_out, 
        final_stock = initial_stock + stock_in - stock_out

        # Generate the pie chart
        chart_data = [initial_stock, stock_in, stock_out, final_stock]
        labels = ['Initial Stock', 'Stock In', 'Stock Out', 'Final Stock']
        colors = ['rgba(0, 255, 0, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(54, 162, 235, 0.2)']
        border_colors = ['rgba(0, 255, 0, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)']

        fig, ax = plt.subplots()
        ax.pie(chart_data, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, pctdistance=0.85,
               wedgeprops=dict(edgecolor='w'))
        ax.set(aspect="equal")
        plt.tight_layout()

        # Save the chart to a bytes object
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        plt.close()

        # Encode the bytes object to base64
        chart_image = base64.b64encode(buffer.getvalue()).decode('utf-8')

        # Render the HTML template with the chart image
        template = get_template('reportt.html')
        html = template.render({'chart_image': chart_image})

        # Return the HTML response
        return HttpResponse(html)
    else:
        return HttpResponse('Invalid request method', status=405)
    
# ////////////////////////
# ////////////////////////
# stock track.js

from .models import Stocktrack, MedicineHistory

def track_quantity(request):
    if request.method == 'POST':
        medicine_name = request.POST.get('medicine_name')
        try:
            medicine = Stocktrack.objects.get(name=medicine_name)
            history_entries = MedicineHistory.objects.filter(medicine=medicine)
            return render(request, 'stock_track/stocktrack.html', {'medicine': medicine, 'history_entries': history_entries})
        except Stocktrack.DoesNotExist:
            error_message = "Medicine not found. Please enter a valid name."
            return render(request, 'stock_track/stocktrack.html', {'error_message': error_message})
    else:
        # Fetch some sample data from the database
        # sample_medicine = Stocktrack.objects.first()  # Fetching the first medicine for demonstration
        # sample_history_entries = MedicineHistory.objects.filter(medicine=sample_medicine)
        # return render(request, 'stock_track/stocktrack.html', {'medicine': sample_medicine, 'history_entries': sample_history_entries})
        return render(request, 'authentication/stocktrack.html')


    # if request.method == 'POST':
    #     medicine_name = request.POST.get('medicine_name')
    #     try:
    #         medicine = Stocktrack.objects.get(name=medicine_name)
    #         history_entries = MedicineHistory.objects.filter(medicine=medicine)
    #         return render(request, 'authentication/stocktrack.html', {'medicine': medicine, 'history_entries': history_entries})
    #     except Stocktrack.DoesNotExist:
    #         error_message = "Medicine not found. Please enter a valid name."
    #         return render(request, 'authentication/stocktrack.html', {'error_message': error_message})
    # return render(request, 'authentication/stocktrack.html')

def edit_entry(request, medicine_id, entry_id):
    if request.method == 'POST':
        new_stock_in = request.POST.get('new_stock_in')
        new_stock_out = request.POST.get('new_stock_out')
        new_total_sales = request.POST.get('new_total_sales')
        entry = MedicineHistory.objects.get(id=entry_id)
        entry.stock_in = new_stock_in
        entry.stock_out = new_stock_out
        entry.total_sales = new_total_sales
        entry.total_stock = int(new_stock_in) - int(new_stock_out)
        entry.save()
        return redirect('track_quantity')
    entry = MedicineHistory.objects.get(id=entry_id)
    return render(request, 'authentication/stocktrack.html', {'entry': entry})

#export to csv form 
import csv
from .models import MedicineHistory

def export_to_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="medicine_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['Medicine ID', 'Stock In', 'Stock Out', 'Total Stock', 'Total Sales'])

    # Fetch data from database or use historyData if it's stored in Python
    # Here, assuming you're fetching data from the database
    history_entries = MedicineHistory.objects.all()

    for entry in history_entries:
        writer.writerow([entry.medicine.name, entry.stock_in, entry.stock_out, entry.total_stock, entry.total_sales])

    return response

# fetching data form database 
# example
# from .models import Medicine

# def my_view(request):
#     # Fetch all records from Medicine model
#     all_medicines = Medicine.objects.all()

#     # Filter records based on conditions
#     filtered_medicines = Medicine.objects.filter(name__icontains='aspirin')  # Example: Fetch medicines with name containing 'aspirin' (case-insensitive)

#     # Fetch a single record based on a condition
#     single_medicine = Medicine.objects.get(id=1)  # Example: Fetch medicine with id=1

#     # Fetch a subset of fields only
#     fields_subset = Medicine.objects.values('name')  # Example: Fetch only the name field for all medicines

#     # Fetch data using complex queries
#     from django.db.models import Q
#     complex_query = Medicine.objects.filter(Q(name__icontains='aspirin') | Q(name__icontains='ibuprofen'))  # Example: Fetch medicines with name containing 'aspirin' or 'ibuprofen'

#     # Use queryset methods to further refine data
#     ordered_medicines = Medicine.objects.order_by('name')  # Example: Order medicines by name field

#     # Iterate through queryset and process data
#     for medicine in all_medicines:
#         print(medicine.name)

#     # Pass data to template for rendering
#     return render(request, 'my_template.html', {'medicines': all_medicines})
  



# ///////////////
# /////////////// import export excel sheet using pandas csv form 
