from rest_framework import serializers 
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *





class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    last_name=serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','username','email','name', 'isAdmin','last_name']


    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name

    def get_last_name(self, obj):
        last_name = obj.last_name
        return last_name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id',  'username', 'email', 'name', 'last_name','isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

    # def get_sizee(self, obj):
    #     sizee= obj.sizee_set.all()
    #     serializer = SizeSerializer(sizee, many=True)
    #     return serializer.data



class ProductSerializer(serializers.ModelSerializer):
    
    user = serializers.SerializerMethodField(read_only=True)
    size = serializers.SerializerMethodField(read_only=True)
    color = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Product
        fields = '__all__'

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data
    def get_size(self, obj):
        size = obj.size
        serializer = SizeSerializer(size, many=True)
        return serializer.data
    def get_color(self, obj):
        color = obj.color
        serializer = ColorSerializer(color, many=True)
        return serializer.data


class NewsliterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Newsliter
        fields = '__all__'





class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContactUs
        fields = '__all__'






# class DesignsSerializer(serializers.HyperlinkedModelSerializer):
#     user = serializers.SerializerMethodField(read_only=True)
#     class Meta:
#         model = Designs
#         fields = '__all__'

#     def get_size(self, obj):
#         size = obj.size
#         serializer = SizeSerializer(size, many=True)
#         return serializer.data




class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'