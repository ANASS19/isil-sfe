from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from .models import *
# Create your views here.
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

 
@api_view(['POST'])
def registerUser(request):
    data=request.data
    try:
        user=User.objects.create(
        first_name=data['name'],
        last_name=data['last_name'],
        username=data['email'],
        email=data['email'],
        password=make_password(data['password'])
        
        )
        serializer=UserSerializerWithToken(user,many=False)

        return Response(serializer.data)
    except:
        message= {'detail':'User with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)





# @api_view(['GET'])
# def getService(requestn,pk):
#     return Response(serviceapi)

@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.all()
    print(products)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTopCategory(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)









@api_view(['GET'])
def getProductByCategory(request, c):
    productcatygory = Product.objects.filter(category=c)

    print('******************',productcatygory)
    serializer = ProductSerializer(productcatygory, many=False)
    return Response(serializer.data)



@api_view(['POST'])
def newsliter(request):
    serializer=NewsliterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)









@api_view(['POST'])
def contact(request):
    serializer=ContactUsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)




# @api_view(['GET'])
# def getRoutes(request):


#     routes=[
#         '/api/Services',
#         '/api/',
#         'Product/<str:pk>',
#         '/api/pruduct<>',
#         '',
#         '',
#         '',
#     ]
#     return Response(routes)


@api_view(['POST'])
def Designsview(request,*args, **kwargs):
    serializer=DesignsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)








@api_view(['GET'])
def Serviceview(request):
    service = Service.objects.all()
    serializer = ServiceSerializer(service, many=True)
    return Response(serializer.data)