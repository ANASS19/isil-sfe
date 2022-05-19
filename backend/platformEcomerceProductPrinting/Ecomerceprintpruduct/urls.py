from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    
)


urlpatterns = [
    path('',views.getRoutes,name='routes'),
    path('Services/',views.getServices,name='Services '),
    path('users/login', TokenObtainPairView.as_view(),
     name='token_obtain_pair'),
    
]
 