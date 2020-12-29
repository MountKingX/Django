from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    """User profile, extention to django built-in User
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=32)
    email = models.CharField(max_length=128)

    def __str__(self):
        return self.user.username
