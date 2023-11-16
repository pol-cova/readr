from djoser.serializers import UserSerializer

# Create class UserProfilesSerializer
class UserProfileSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = ("id", "username", "email","date_joined")