from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Art, Artist
from .serializers import TestDataSerializer, ArtistDataSerializer
import json
from .gpt import askChatgpt
from .tts import generate_voice
import os
from django.http import HttpResponse 
# Create your views here.

# Art 테이블
# 그냥 Art 테이블 다 읽어오기
@api_view(['GET'])
def getArtDatas(request):
    datas = Art.objects.all()
    serializer = TestDataSerializer(datas, many=True)
    return Response(serializer.data)

# Art 테이블에서 특정 작품명으로 해당 데이터만 읽어오기
@api_view(['GET'])
def getArtData(request, title):
    data = Art.objects.get(title=title)
    serializer = TestDataSerializer(data, many=False) # 하나만 가지고 옴 :  many=False
    return Response(serializer.data)

# Art 테이블에 데이터 추가하기
@api_view(['POST'])
def postArt(request):
    reqData = request.data
    serializer = TestDataSerializer(data=reqData)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Artist 테이블
# 그냥 Artist 테이블 다 읽어오기
@api_view(['GET'])
def getArtistDatas(request):
    datas = Artist.objects.all()
    serializer = ArtistDataSerializer(datas, many=True)
    return Response(serializer.data)

# Artist 테이블에 데이터 추가하기
@api_view(['POST'])
def postArtist(request):
    reqData = request.data
    serializer = ArtistDataSerializer(data=reqData)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 특정 작품 정보 조회하기!
@api_view(['GET'])
def findArtData(request, title):
    Artdata = Art.objects.get(title=title)
    Artserializer = TestDataSerializer(Artdata, many=False) # 하나만 가지고 옴 :  many=False
    Artistserializer = ArtistDataSerializer(Artdata.artist)
    data = {
         'art' : Artserializer.data,
         'artist' : Artistserializer.data,
    }
    
    return Response(data)

# 작품 이전, 다음 정보 조회하기!
@api_view(['GET'])
def orderData(request, title):
    Artdata = Art.objects.get(title=title)
    if Artdata.order_num == 1:
        Artserializer = TestDataSerializer(Art.objects.get(order_num=Artdata.order_num + 1), many=False)
        data = {
            'beforeArt' : "",
            'afterArt' : Artserializer.data,
        }
        return Response(data)
    if Artdata.order_num == 3:
        ArtBeforeserializer = TestDataSerializer(Art.objects.get(order_num=Artdata.order_num - 1), many=False)
        data = {
            'beforeArt' : ArtBeforeserializer.data,
            'afterArt' : "",
        }
        return Response(data)
    ArtBeforeserializer = TestDataSerializer(Art.objects.get(order_num=Artdata.order_num - 1), many=False)
    ArtAfterserializer = TestDataSerializer(Art.objects.get(order_num=Artdata.order_num + 1), many=False)
    data = {
        'beforeArt' : ArtBeforeserializer.data,
        'afterArt' : ArtAfterserializer.data,
    }
  
    return Response(data)

# 텍스트모드 추가 질문
@api_view(['POST'])
def textModeData(request, title):
    Artdata = Art.objects.get(title=title)
    artist_name = Artdata.artist.name
    body =  json.loads(request.body.decode('utf-8'))
    # print(body)
    chat = askChatgpt(body["question"], artist_name, title)
    data = {
        'content' : chat,
        'title' : Artdata.title
    }
    
    return Response(data)

### "a" : "Bbb"

# 라디오 모드 - 초기 해설
@api_view(['GET'])
def radioModeData(request, title):
    Artdata = Art.objects.get(title=title)
    # body =  json.loads(request.body.decode('utf-8'))
    # print(body)
    artist_name = Artdata.artist.name
    gender = Artdata.artist.gender
    text = Artdata.content

    generate_voice(artist_name, text, gender, "radioMode_doscent.mp3");

    file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'radioMode_doscent.mp3')
    
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            # return HttpResponse(fh.read(), content_type="audio/mpeg")
            response = HttpResponse(fh.read(), content_type="audio/mpeg")
            response['Content-Disposition'] = f'attachment; filename="radioMode_doscent.mp3"'
            return response
    else:
        # 파일이 존재하지 않을 경우 404 에러 반환
        return HttpResponse("File not found.", status=404)


# 라디오 모드 - 추가질문의 답변에 대한 음성 파일 생성하기
@api_view(['GET'])
def radioModeExplainData(request, title, content):
    Artdata = Art.objects.get(title=title)
    chat = content

    artist_name = Artdata.artist.name
    gender = Artdata.artist.gender
    text = chat

    generate_voice(artist_name, text, gender, "radioMode_doscent.mp3");

    file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'radioMode_doscent.mp3')
    
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            # return HttpResponse(fh.read(), content_type="audio/mpeg")
            response = HttpResponse(fh.read(), content_type="audio/mpeg")
            response['Content-Disposition'] = f'attachment; filename="radioMode_doscent.mp3"'
            return response
    else:
        # 파일이 존재하지 않을 경우 404 에러 반환
        return HttpResponse("File not found.", status=404)
