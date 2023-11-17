from django.db import models
from django.contrib.auth.models import User

# Create user preference model
class UserPreferences(models.Model):
    # Create pronouns choices
    PRONOUNS = (
        ('he', 'He/Him'),
        ('she', 'She/Her'),
        ('they', 'They/Them'),
        ('other', 'Other'),
    )
    # Create theme choices
    THEME = (
        ('light', 'Light'),
        ('dark', 'Dark'),
    )

    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    pronouns = models.CharField(max_length=10, choices=PRONOUNS, default='other')
    theme = models.CharField(max_length=10, choices=THEME, default='light')

    def __str__(self):
        return f"{self.user.username}'s preferences"