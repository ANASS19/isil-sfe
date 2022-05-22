# created by anass nassiri


from django.db import models
from django.contrib.auth.models import User

# Create your models here.




class Panier(models.Model):
    pass

class Category(models.Model):
    x=[
        ('T-chirt','T-chirt'),
        ('Hodie','Hodie'),
        ('gacket','gacket')

    ]
    name = models.CharField(max_length=50,choices=x)
  
    # @staticmethod
    # def get_all_categories():
    #     return Category.objects.all()
  
    def __str__(self):
        return self.name

class Slides(models.Model):
    pass

class Newsliter(models.Model):
    email=models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.email)

class ContactUs(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    message=models.TextField(max_length=255)

class About(models.Model):
    email=models.EmailField()
    Tel=models.CharField(max_length=50)
    address = models.CharField(max_length=200,null=True,blank=True)
    desription=models.TextField(max_length=255)


class Serviceapi(models.Model):
    logo=models.CharField(max_length=255)
    title=models.CharField(max_length=255)
    info=models.TextField(max_length=255)
    def __str__(self):
        return str(self.title)
#     

# class Test(models.Model):
#     pass


# class Category(models.Model):
#     x=[
#         ('T-chirt','T-chirt'),
#         ('Hodie','Hodie'),
#         ('gacket','gacket')

#     ]
#     name = models.CharField(max_length=50,choices=x)
  
#     # @staticmethod
#     # def get_all_categories():
#     #     return Category.objects.all()
  
#     def __str__(self):
#         return self.name


class Color(models.Model):
    c=[
        ('black','black'),
        ('white','white')
    ]
    color=models.CharField(max_length=200,choices=c)
    def __str__(self):
        return str(self.color)

class Size(models.Model):
    s=[
        ('S','S'),
        ('M','M'),
        ('L','L'),
        ('XL','XL'),
    ]
    size=models.CharField(max_length=200,choices=s)
    def __str__(self):
        return str(self.size)





class Product(models.Model):
    ca=[
        ('T-chirt','T-chirt'),
        ('Hodie','Hodie'),
        ('gacket','gacket')
    ]

    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(null=True,blank = True,default = "/image/logotab3lia.png",upload_to="image/")
    brand = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True,choices=ca)
    size=models.ManyToManyField(Size, related_name='sizee',  blank=True,null=True)
    color=models.ManyToManyField(Color , related_name='colorr',  blank=True, null=True)
    description = models.TextField(null=True,blank=True)
    rating = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    countInStock = models.IntegerField(null=True,blank=True,default=0)
    createdAt = models.DateTimeField(auto_now_add=True,null=True)
    inStock=models.BooleanField(default=True)
    
    
    
    # size=models.CharField(max_length=200,null=True,blank=True,choices=s)
    # color=models.CharField(max_length=200,null=True,blank=True,choices=c)
    

    def __str__(self):
        return self.name +" | "+self.brand +" | " + str(self.price)

# class ShippingAddress(models.Model):
#     order = models.OneToOneField(Order,on_delete=models.CASCADE,null=True,blank=True)
#     address = models.CharField(max_length=200,null=True,blank=True)
#     city  = models.CharField(max_length=200,null=True,blank=True)
#     postalCode = models.CharField(max_length=200,null=True,blank=True)
#     country = models.CharField(max_length=200,null=True,blank=True)
#     shippingPrice = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     _id = models.AutoField(primary_key=True,editable=False)

#     def __str__(self):
#         return str(self.address)

# class Review(models.Model):
#     product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
#     user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     name = models.CharField(max_length=200,null=True,blank=True)
#     rating =  models.IntegerField(null=True,blank=True,default=0)
#     comment = models.TextField(null=True,blank=True)
#     createdAt = models.DateTimeField(auto_now_add=True)
#     _id =  models.AutoField(primary_key=True,editable=False)

#     def __str__(self):
#         return str(self.rating)


# class Order(models.Model):
#     user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
#     paymentMethod = models.CharField(max_length=200,null=True,blank=True)
#     taxPrice = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     shippingPrice = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     totalPrice = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     isPaid = models.BooleanField(default=False)
#     paidAt = models.DateTimeField(auto_now_add=False,null=True, blank=True)
#     isDeliver = models.BooleanField(default=False)
#     deliveredAt = models.DateTimeField(auto_now_add=False,null=True, blank=True)
#     createdAt = models.DateTimeField(auto_now_add=True,null=True, blank=True)
#     _id =  models.AutoField(primary_key=True,editable=False)

#     def __str__(self):
#         return str(self.createdAt)


# class OrderItem(models.Model):
#     product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
#     order  = models.ForeignKey(Order,on_delete=models.SET_NULL,null=True)
#     name = models.CharField(max_length=200,null=True,blank=True)
#     qty = models.IntegerField(null=True,blank=True,default=0)
#     price = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
#     image = models.CharField(max_length=200,null=True,blank=True)
#     _id =  models.AutoField(primary_key=True,editable=False)

#     def __str__(self):
#         return str(self.name)









# class Order(models.Model):
#     product = models.ForeignKey(Products,
#                                 on_delete=models.CASCADE)
#     customer = models.ForeignKey(Customer,
#                                  on_delete=models.CASCADE)
#     quantity = models.IntegerField(default=1)
#     price = models.IntegerField()
#     address = models.CharField(max_length=50, default='', blank=True)
#     phone = models.CharField(max_length=50, default='', blank=True)
#     date = models.DateField(default=datetime.datetime.today)
#     status = models.BooleanField(default=False)
  
#     def placeOrder(self):
#         self.save()
  
#     @staticmethod
#     def get_orders_by_customer(customer_id):
#         return Order.objects.filter(customer=customer_id).order_by('-date')








