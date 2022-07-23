from django.urls import path
from .views import *

urlpatterns = [
    path('departamentos/', DepartamentoView.as_view(), name='departamentos_list'),
    path('departamentos/<int:id>', DepartamentoView.as_view(), name='departamento_process'),

    path('ciudad/', CiudadView.as_view(), name='ciudades_list'),
    path('ciudad/<int:id>', CiudadView.as_view(), name='ciudad_process'),

    path('localidad/', LocalidadView.as_view(), name='localidades_list'),
    path('localidad/<int:id>', LocalidadView.as_view(), name='localidad_process'),
]