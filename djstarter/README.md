# djstarter project

Python version 3.7 | Django version 2.2.6

Current applications:
* hello_wold_app (demo-app)

---

## Instructions

### PyCharm (suggested)
- easy-to-follow IDE, easy run

### Conda + Atom

- run `conda create --name myEnv python=3.7 django` to create virtual environment and install django
- run `activate myEnv` to activate the desired virtual environment
- run `conda info --envs` to view the current environments
- run `django-admin startproject my_project` to create a skeleton project
- run `cd my_project` then `python manage.py runserver` to run project in localhost (http://127.0.0.1:8000)
- run `python manage.py startapp my_app` to create a skeleton app

---

In Windows, run `. ./venv/Scripts/activate` to activate virtual env

run `winpty python manage.py createsuperuser` to create admin user


last updated on Oct-2019
