# import rest_framework
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
# import models and serializers
from .serializers import UserProfileSerializer, UserPreferencesSerializer
from .models import UserPreferences




# Create profile view
class get_user_profile(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)

# Create preference view
class get_user_preferences(APIView):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    # Get user preferences if they exist
    def get(self, request):
        user = request.user
        preferences = get_object_or_404(UserPreferences, user=user)
        serializer = UserPreferencesSerializer(preferences)
        return Response(serializer.data)
    # Create user preferences if they don't exist
    def post(self, request):
        user = request.user
        preferences = UserPreferences.objects.filter(user=user)
        if preferences.exists():
            return Response({'message': 'Preferences already exist'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = UserPreferencesSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # Update user preferences
    def put(self, request):
        user = request.user
        preferences = get_object_or_404(UserPreferences, user=user)
        serializer = UserPreferencesSerializer(preferences, data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)