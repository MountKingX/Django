# React-Django Project Description

-----

## Frontend (client)
Please check client/README.md

-----

## Backend (server)

IDE: PyCharm
libs: check `requirements.txt` and `pip install -r requirements.txt`

### Step-01 initial setup
```bash
# starting from project-root: react-django directory
$ cd server
$ python manage.py startapp todo
$ python manage.py migrate
$ python manage.py runserver
```

### Step-02 add Todo models and admin settings
```bash
# add `todo` to INSTALLED_APPS in backend/settings.py
INSTALLED_APPS = [
    'todo',
    'django.contrib.admin',
    ...
  ]

# create Todo in todo/models.py
from django.db import models

class Todo(models.Model):
  title = models.CharField(max_length=120)
  description = models.TextField()
  completed = models.BooleanField(default=False)

  def _str_(self):
    return self.title

$ python manage.py makemigrations todo
$ python manage.py migrate todo

# update todo/admin.py
from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
  list_display = ('title', 'description', 'completed') # add this

admin.site.register(Todo, TodoAdmin)


$ python manage.py createsuperuser
# Username: sa
# Email address: any@gmail.com
# Password: password

$ python manage.py runserver
# http://127.0.0.1:8000/admin/
```

### Step-03 add CORS and Serialization support
```bash
# add rest_framework and corsheaders to the list of installed applications
$ pip install djangorestframework django-cors-headers
# add `todo` to INSTALLED_APPS in backend/settings.py
INSTALLED_APPS = [
    'corsheaders',
    'rest_framework',
    'todo',
    'django.contrib.admin',
    ...
  ]
  
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    ...
]

# we whitelist localhost:3000 and more
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://localhost:8080',
]

$ touch todo/serializers.py
# todo/serializers.py

from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

```

### Step-04 creating the View and setup server/urls
```bash
# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

# server/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

$ python manage.py runserver
# visit http://localhost:8000/api/todos to check all entries or create (POST) new entry

# visit http://localhost:8000/api/todos/{id} to check entry with id={id} or update (PUT) current entry
```

### Appendix
```bash
$ pip freeze > requirements.txt
```

Reference: https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
