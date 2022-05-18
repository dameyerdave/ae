from random import choices
from django_filters import FilterSet, CharFilter
from feeds.models import Post
from django.db.models import Q

class PostFilter(FilterSet):
    search = CharFilter(method='filter_search')

    class Meta:
        model = Post
        fields = ['search']

    def filter_search(self, qs, _, value):
        if value:
            predicate = Q()
            for v in value.split(','):
              predicate |= Q(title__icontains=v) | Q(body__icontains=v)
            print('predicate', predicate)
            return qs.filter(predicate)
        return qs