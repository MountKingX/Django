# djstarter project

Python version 3.8 | Django version 3.1.4

Current applications:
* demo-app (from official site)

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
In Ubuntu, run `source ./venv/bin/activate` to activate virtual env and `deactivate` to leave
run `python manage.py createsuperuser` to create admin user
username: kangmin
password: indeed

In Windows, run `. ./venv/Scripts/activate` to activate virtual env
run `winpty python manage.py createsuperuser` to create admin user

last updated on Dec-2020


change default python version to 3.8
```bash
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1
```