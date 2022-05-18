from drf_auto_endpoint.router import register
from drf_auto_endpoint.endpoints import Endpoint
from feeds.models import Post
from core.serializers import PostSerializer
from core.views import PostModelViewSet

@register
class Post(Endpoint):
  model = Post

  base_serializer = PostSerializer
  base_viewset = PostModelViewSet

  extra_fields = ['source_name']
  ordering_fields = ['created']