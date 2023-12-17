import os
from google.cloud import texttospeech

json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'virtual-docent.json')
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = json_path

def generate_voice(artist, text, gender, output):
    # Text-to-Speech 클라이언트를 초기화합니다.
    client = texttospeech.TextToSpeechClient()

    # genders = {
    #   0 : texttospeech.SsmlVoiceGender.MALE,
    #   1 : texttospeech.SsmlVoiceGender.FEMALE,
    # }

    # Text-to-Speech 요청을 구성합니다.
    input_text = texttospeech.SynthesisInput(text=text)
    if gender == 0:
        voice_name = 'ko-KR-Wavenet-C'
    elif gender == 1:
        voice_name = 'ko-KR-Wavenet-B'
        
    voice = texttospeech.VoiceSelectionParams(
        language_code='ko-KR',
        name=voice_name
        #ssml_gender=genders[gender]
    )
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Text-to-Speech 요청을 수행합니다.
    response = client.synthesize_speech(
        input=input_text,
        voice=voice,
        audio_config=audio_config
    )

    # 오디오 데이터를 파일에 저장합니다.
    with open(f"learner_project/{output}", 'wb') as out:
        out.write(response.audio_content)
        print(f'Audio content written to "{output}"')
        return response.audio_content

    

