from django.db import models


class Category(models.Model):
    DRINKS = "Drinks"
    MEAT = "Meat"
    BURGER = "Burger"
    BREAKFESTS = "Breakfests"
    SALADS = "Salads"
    HEALTHY = "Healthy"
    APPETIZERS = "Appetizers"
    INSTANT = "Instant"

    CATEGORY_CHOICES = tuple((category, category.title()) for category in [
        DRINKS, MEAT, BURGER, BREAKFESTS, SALADS, HEALTHY, APPETIZERS, INSTANT
    ])

    name = models.CharField(choices=CATEGORY_CHOICES, max_length=255)
    image = models.ImageField(upload_to="images/categories/", null=True, blank=True)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    POPULAR = "Popular"

    POST_CHOICES = tuple((post, post.title()) for post in [POPULAR])

    category = models.ForeignKey(
        to=Category, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    short_desc = models.CharField(max_length=255, null=True, blank=True)
    content_before_image = models.TextField(null=True, blank=True)
    content_after_image = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="images", null=True, blank=True)
    ingredients = models.TextField(null=True, blank=True)
    post_label = models.CharField(choices=POST_CHOICES, max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title