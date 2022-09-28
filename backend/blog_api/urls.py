from django.urls import path, include
from .views import RecipeApiView, CategoryApiView, CategoryRecipeViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register("posts", RecipeApiView, basename="posts")
router.register("categories", CategoryApiView, basename="categories")
router.register("categories-posts", RecipeApiView, basename="categories-posts")

urlpatterns = [
    path("", include(router.urls))
]

