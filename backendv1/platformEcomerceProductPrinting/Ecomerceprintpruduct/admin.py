from django.contrib import admin
from .models import *
# Register your models here.





class ProductAdmin(admin.ModelAdmin):
    list_display=['user','name','category','inStock','price','countInStock']
    list_display_links=['name','user']
    search_fields=['name','category']
    list_editable=['category','inStock','price','countInStock']
    list_filter=['category','price']
    

class DesignsAdmin(admin.ModelAdmin):
    list_display=['user','category','price','color']
    list_display_links=['user']
    list_editable=['category','price','color']
    search_fields=['user','category','price','color']
    list_filter=['category']
    list_filter=['category','price']

class OrderAdmin(admin.ModelAdmin):
    list_display=['product','customer','quantity','price']
    list_display_links=['customer']
    list_editable=['product','quantity','price']
    search_fields=['product','customer','quantity','price']
    

class OrderItemAdmin(admin.ModelAdmin):
    list_display=['order','product','name']
    list_display_links=['product']
    list_editable=['name']
    search_fields=['product','customer','quantity','price']


admin.site.register(Newsliter)
admin.site.register(ContactUs)
admin.site.register(About)
admin.site.register(Service)
admin.site.register(Product,ProductAdmin)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Designs,DesignsAdmin)
admin.site.register(Review)
admin.site.register(Order,OrderAdmin)
admin.site.register(ShippingAddress)
admin.site.register(OrderItem,OrderItemAdmin)










admin.site.site_header='Tbe3lia Administration'
admin.site.site_title = 'Tbe3lia Administration'