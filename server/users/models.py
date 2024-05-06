from django.db import models
from accounts.models import Professor

class Research_Project(models.Model):
    professor=models.ForeignKey(Professor,on_delete=models.CASCADE)
    topic = models.CharField(max_length=10)
    skills = models.CharField(max_length=30,blank=True)
    eligibility = models.CharField(max_length=30,blank=True)

class Internship(models.Model):
    professor=models.ForeignKey(Professor,on_delete=models.CASCADE)
    internship_Title = models.CharField(max_length=30,blank=True)
    internship_Type = models.CharField(max_length=10,blank=True)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    stipend = models.IntegerField(default=5000,blank=True)
    eligibility = models.CharField(max_length=30,blank=True)
    organization = models.CharField(max_length=30,blank=True)
    location = models.CharField(max_length=30,blank=True)
    no_Of_Openings = models.IntegerField(blank=True)
    skills = models.CharField(max_length=100,blank=True)

    def __str__(self):
        return self.internship_Title


class Courses(models.Model):
    course_name = models.CharField(max_length=100)
    skill = models.CharField(max_length=200,blank=True)
    image = models.ImageField(null=True,blank=True,upload_to="images/")
    cost = models.IntegerField(blank=True)
    ratings = models.IntegerField(blank=True)
    website_name = models.CharField(max_length=5000,blank=True)

    def __str__(self):
        return self.course_name

