from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Newsliter)
admin.site.register(ContactUs)
admin.site.register(About)
admin.site.register(Service)
admin.site.register(Product)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Designs)



admin.site.register(Review)
admin.site.register(Order)
admin.site.register(ShippingAddress)
admin.site.register(OrderItem)


#admin.site.register(Category)








admin.site.site_header='Tbe3lia Administration'
admin.site.site_title = "Tbe3lia Administration"