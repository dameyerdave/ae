from rest_framework import serializers
from feeds.models import Post
from core.filters import PostFilter

class PostSerializer(serializers.ModelSerializer):
    source = serializers.ReadOnlyField(source='source.name')

    class Meta:
      model = Post
      fields = '__all__'