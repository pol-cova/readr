from django.urls import path
from .views import get_user_profile, get_user_preferences

urlpatterns = [
    path('profile/', get_user_profile.as_view(), name='profile'),
    path('preferences/', get_user_preferences.as_view(), name='preferences'),
]