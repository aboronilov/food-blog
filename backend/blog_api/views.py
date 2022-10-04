from django.shortcuts import render
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework import viewsets, mixins
from rest_framework.response import Response


class RecipeApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = "slug"


class CategoryApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRecipeViewSet(viewsets.ViewSet):
    def retrieve(self, request, *args, **kwargs):
        queryset = Recipe.objects.none()
        pk = kwargs.get("pk")
        if pk is not None:
            queryset = Recipe.objects.filter(category=pk)
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)


class PopularRecipesViewSet(viewsets.ViewSet):
    def list(self, request, *args, **kwargs):
        queryset = Recipe.objects.filter(post_label__iexact="Popular")
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)