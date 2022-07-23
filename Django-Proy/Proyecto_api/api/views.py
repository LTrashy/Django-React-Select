from urllib import request
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json
# Create your views here.


class DepartamentoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id>0):
            departamentos=list(Departamento.objects.filter(id=id).values())
            if len(departamentos)>0:
                departamento = departamentos[0]
                datos={'message':'Success','departamento':departamento}
            else:
                datos={'message':'Departamento not found'}
            return JsonResponse(datos)
        else:
            departamentos=list(Departamento.objects.values())
            if len(departamentos)>0:
                datos={'message':'Success','departamento':departamentos}
            else:
                datos={'message':'Departamento not found'}
            return JsonResponse(datos)
 
    def post(self, request):
        jd = json.loads(request.body)
        Departamento.objects.create(name = jd['name'])
        datos={'message':'Success'}
        return JsonResponse(datos)
 
    def put(self,request, id):
        jd = json.loads(request.body)
        departamentos=list(Departamento.objects.filter(id=id).values())
        
        if len(departamentos)>0:
            departamento = Departamento.objects.get(id=id)
            departamento.name=jd['name']
            departamento.save()
            datos={'message':'Success'}
        else:
            datos={'message':'Departamento not found'}
        return JsonResponse(datos)
 
    def delete(self,request, id):
        departamento=list(Departamento.objects.filter(id=id).values())
        if len(departamento)>0:
            departamento.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'Departamento not found'}
        return JsonResponse(datos)

class CiudadView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id>0):
            ciudades=list(Ciudad.objects.filter(id=id).values())
            if len(ciudades)>0:
                ciudad = ciudades[0]
                datos={'message':'Success','ciudad':ciudad}
            else:
                datos={'message':'ciudad not found'}
            return JsonResponse(datos)
        else:
            ciudades=list(Ciudad.objects.values())
            if len(ciudades)>0:
                datos={'message':'Success','ciudades':ciudades}
            else:
                datos={'message':'ciudades not found'}
            return JsonResponse(datos)
 
    def post(self, request):
        jd = json.loads(request.body)
        Ciudad.objects.create(name = jd['name'],departamento = jd['departamento'])
        datos={'message':'Success'}
        return JsonResponse(datos)
 
    def put(self,request, id):
        jd = json.loads(request.body)
        ciudades=list(Ciudad.objects.filter(id=id).values())
        
        if len(ciudades)>0:
            ciudad = Ciudad.objects.get(id=id)
            ciudad.name=jd['name']
            ciudad.departamento=jd['departamento']
            ciudad.save()
            datos={'message':'Success'}
        else:
            datos={'message':'ciudad not found'}
        return JsonResponse(datos)
 
    def delete(self,request, id):
        ciudad=list(Ciudad.objects.filter(id=id).values())
        if len(ciudad)>0:
            Ciudad.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'ciudad not found'}
        return JsonResponse(datos)

class LocalidadView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id>0):
            localidades=list(Localidad.objects.filter(id=id).values())
            if len(localidades)>0:
                localidad = localidades[0]
                datos={'message':'Success','localidad':localidad}
            else:
                datos={'message':'localidad not found'}
            return JsonResponse(datos)
        else:
            localidades=list(Localidad.objects.values())
            if len(localidades)>0:
                datos={'message':'Success','localidades':localidades}
            else:
                datos={'message':'localidad not found'}
            return JsonResponse(datos)
 
    def post(self, request):
        jd = json.loads(request.body)
        Localidad.objects.create(name = jd['name'],ciudad = jd['ciudad'])
        datos={'message':'Success'}
        return JsonResponse(datos)
 
    def put(self,request, id):
        jd = json.loads(request.body)
        localidad=list(Localidad.objects.filter(id=id).values())
        
        if len(localidad)>0:
            localidad = Localidad.objects.get(id=id)
            localidad.name=jd['name']
            localidad.ciudad=jd['ciudad']
            localidad.save()
            datos={'message':'Success'}
        else:
            datos={'message':'localidad not found'}
        return JsonResponse(datos)
 
    def delete(self,request, id):
        localidad=list(Localidad.objects.filter(id=id).values())
        if len(localidad)>0:
            Localidad.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'localidad not found'}
        return JsonResponse(datos)