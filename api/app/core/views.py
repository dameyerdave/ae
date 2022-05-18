
from rest_framework import viewsets
from core.filters import PostFilter

class PostModelViewSet(viewsets.ModelViewSet):
    filterset_class = PostFilter
