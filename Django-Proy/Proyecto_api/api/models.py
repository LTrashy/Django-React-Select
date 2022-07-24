from django.db import models

# Create your models here.

class Departamento(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Ciudad(models.Model):
    name=models.CharField(max_length=50)
    departamento=models.ForeignKey(Departamento, on_delete=models.CASCADE)
    def get_departamento_name(self):
        return self.departamento.name

    def __str__(self):
        return self.name


class Localidad(models.Model):
    name=models.CharField(max_length=50)    
    ciudad= models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    def get_ciudad_name(self):
        return self.ciudad.name

    def __str__(self):
        return self.name


