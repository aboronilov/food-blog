from django.urls import path, include
from .views import PopularRecipesViewSet, RecipeApiView, CategoryApiView, CategoryRecipeViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register("posts", RecipeApiView, basename="posts")
router.register("categories", CategoryApiView, basename="categories")
router.register("categories-posts", CategoryRecipeViewSet, basename="categories_posts")
router.register("popular-posts", PopularRecipesViewSet, basename="popular_posts")

urlpatterns = [
    path("", include(router.urls))
]

