from openai import OpenAI
import time
import os
# from .my_settings import OPENAI_API_KEY
# open api key 

def askChatgpt(question, artist, title):
  client = OpenAI(
    api_key = "[secrete]"
  )

  # prompt = "Please tell about Andy Warhol"     # messages는 한 채팅 내에서 계속 이어져야 함
  prompt_helper = f"Please write in all of things in Korean. \
                    Please only answer about Artist {artist}'s work, \
                    specifically about artwork {title}. \
                    And provide a first-person perspective description as if you were the artist of that work.\
                   " # 답변을 무조건 한국어로 작성
  
  completion = client.chat.completions.create(
    model="gpt-4-0613",
    messages=[
      #{"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
      {"role": "user", "content": question + prompt_helper}
    ]
  )

  chat = completion.choices[0].message.content

  print(chat)

  return chat

