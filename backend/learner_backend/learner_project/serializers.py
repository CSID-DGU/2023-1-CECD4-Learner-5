from rest_framework.serializers import ModelSerializer
#from rest_framework import serializers
from .models import Art, Artist

# Art 테이블만! 여기에 순서 column 추가하기
class TestDataSerializer(ModelSerializer):
    class Meta:
        model = Art
        fields = '__all__'


# Artist 테이블만!
class ArtistDataSerializer(ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'
