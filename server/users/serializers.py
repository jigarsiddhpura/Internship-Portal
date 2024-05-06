from rest_framework import serializers
from .models import Internship,Research_Project,Courses

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'

class Research_ProjectSerializer(serializers.ModelSerializer):
    professor = serializers.ReadOnlyField(source='professor.email')
    class Meta:
        model = Research_Project
        fields = '__all__'

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'