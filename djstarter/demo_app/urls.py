from django.urls import path
from . import views

app_name = 'demo_app'
urlpatterns = [
    path('', views.IndexView.as_view(), name='demo-index'),
    # ex: /demo_app/5/
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # ex: /demo_app/5/results/
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # ex: /demo_app/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
