import os
import sys
from embedchain import App
from myapikey import apikey
import configparser
import pprint

os.environ["OPENAI_API_KEY"] = apikey()

tourism_bot = App()

# Tumpak Sewu Waterfalls
# TODO: List all of the tourism spots

tourism_bot.add("https://en.wikipedia.org/wiki/Tumpak_Sewu_Waterfalls")
tourism_bot.add('https://id.wikipedia.org/wiki/Museum_Brawijaya')
# tourism_bot.add("http://javaisbeautiful.com/2016/08/08/tumpak-sewu-waterfall-lumajang-malang-east-java-indonesia/")

# Mount Bromo
tourism_bot.add("https://en.wikipedia.org/wiki/Mount_Bromo")



def ask_chatbot(question: str) -> str:
    return tourism_bot.query(question)