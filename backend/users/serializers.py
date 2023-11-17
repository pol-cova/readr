from djoser.serializers import UserSerializer
from .models import UserPreferences
from rest_framework import serializers

# Create class UserProfilesSerializer
class UserProfileSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = ("id", "username", "email","date_joined")

# Create class UserPreferencesSerializer
class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ("pronouns", "theme")