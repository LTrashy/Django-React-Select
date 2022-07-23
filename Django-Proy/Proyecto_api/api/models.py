from django.db import models

# Create your models here.

class Departamento(models.Model):
    name=models.CharField(max_length=50)


class Ciudad(models.Model):
    name=models.CharField(max_length=50)
    departamento=models.ForeignKey(Departamento, on_delete=models.CASCADE)


class Localidad(models.Model):
    name=models.CharField(max_length=50)    
    ciudad= models.ForeignKey(Ciudad, on_delete=models.CASCADE)


