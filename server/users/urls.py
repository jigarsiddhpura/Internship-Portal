from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),

    #url for internships
	path('internship-create/', views.internshipCreate, name="internship-create"),
	path('internship-update/<str:pk>/', views.internshipUpdate, name="internship-update"),
	path('internship-delete/<str:pk>/', views.internshipDelete, name="internship-delete"),

    #urls for courses
    path('courses_list/',views.CoursesListAPIView.as_view(), name='courses_list'),
    path('courses_create/',views.CoursesCreateAPIView.as_view(),name='courses_create'),
    path('courses_update/<id>/',views.CoursesUpdateAPIView.as_view(),name='courses_update'),
    path('courses_delete/<id>/',views.CoursesDestroyAPIView.as_view(),name='courses_delete'),

    #url for research project
    path('Research_ProjectLC/', views.Research_ProjectLC.as_view()),
    path('Research_ProjectRUD/<str:pk>/', views.Research_ProjectRUD.as_view()),

    #web scrapping
    path('LinkedIn/', views.LinkedIn.as_view()),
    path('InternShala/', views.InternShala),
]