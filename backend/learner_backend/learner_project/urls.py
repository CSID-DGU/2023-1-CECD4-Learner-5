from django.urls import path
from . import views

urlpatterns = [
    # Art 테이블
    path('getArtAll/', views.getArtDatas, name="getArtAll"),
    path('getArt/<str:title>', views.getArtData, name="getArt"),
    path('postArt/', views.postArt, name="postArt"),
    # Artist 테이블
    path('getArtistAll/', views.getArtistDatas, name="getArtistAll"),
    path('postArtist/', views.postArtist, name="postArtist"),
    # 특정 작품 정보 조회하기
    path('findArt/<str:title>', views.findArtData, name="findArt"),
    # 순서 나타내기
    path('order/<str:title>', views.orderData, name="order"),
    # 텍스트 모드 추가질문 해설
    path('textMode/<str:title>', views.textModeData, name="textMode"),
    # 라디오 모드
    path('radioMode/<str:title>', views.radioModeData, name="radioMode"),
    # 라디오 모드 추가질문 해설
    path('radioModeExplain/<str:title>/<str:content>', views.radioModeExplainData, name="radioModeExplain"),
]