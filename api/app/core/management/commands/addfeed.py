# https://partner-feeds.20min.ch/rss/20minuten/schweiz

from django.core.management.base import BaseCommand
from os import environ
import logging
logger = logging.getLogger(__name__)
from feeds.models import Source


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('--name', '-n', required=True, type=str)
        parser.add_argument('--url', '-u', required=True, type=str)


    def handle(self, *args, **options):
        Source.objects.create(name=options['name'], feed_url=options['url'], interval=1)