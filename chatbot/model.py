import os
import sys
from embedchain import App
from myapikey import apikey
import configparser
import pprint




def ask_chatbot(bot, question: str) -> str:
    return bot.query(question)

def main() -> None:
    if len(sys.argv) > 2:
        return EOFError
    
    os.environ["OPENAI_API_KEY"] = apikey()

    tourism_bot = App()

    # Tumpak Sewu Waterfalls
    # TODO: List all of the tourism spots

    tourism_bot.add("https://en.wikipedia.org/wiki/Tumpak_Sewu_Waterfalls")
    # tourism_bot.add("http://javaisbeautiful.com/2016/08/08/tumpak-sewu-waterfall-lumajang-malang-east-java-indonesia/")

    # Mount Bromo
    tourism_bot.add("https://en.wikipedia.org/wiki/Mount_Bromo")

    print(ask_chatbot(tourism_bot, sys.argv[1]))
    # print(sys.argv[1])


if __name__ == '__main__':
    main()