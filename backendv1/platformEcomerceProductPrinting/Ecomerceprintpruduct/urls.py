from django.urls import path
from . import views



urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(),
    name='token_obtain_pair'),
    path('users/register',views.registerUser,name='register'),
    path('users/profile/',views.getUserProfile,name='users-profile'),
    path('users/',views.getUsers,name='users'),
    path('Category/',views.getTopCategory,name='Category '),
    path('Services/',views.getServices,name='Services '),
    path('Products/',views.getTopProducts,name='Products '),
    
    path('Product/<str:pk>/',views.getProduct,name='Product '),
    path('Product/Category/<str:c>/',views.getProductByCategory,name='ProductCategor '),
    
    
]
 

# path('',views.getRoutes,name='routes'),