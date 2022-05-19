from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .ServiceApi import serviceapi
from .models import Serviceapi
# Create your views here.




@api_view(['GET'])
def getRoutes(request):


    routes=[
        '/api/Services',
        '/api/',
        '',
        '',
        '',
        '',
        '',
    ]
    return Response(routes)


@api_view(['GET'])
def getServices(request):
    return Response(serviceapi)

# @api_view(['GET'])
# def getService(requestn,pk):
#     return Response(serviceapi)