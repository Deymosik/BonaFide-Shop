from flask import Flask, render_template, request, redirect, url_for
from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.utils import executor
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup

# Вставьте ваш токен бота
BOT_TOKEN = '6768228184:AAFTqEALb1NK0Z36fvosz0Ulu59JKLkoaVo'

app = Flask(__name__)
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)

# Обработка команды /start
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    keyboard = InlineKeyboardMarkup()
    web_button = InlineKeyboardButton("Открыть веб-приложение", url='http://127.0.0.1:5000/')
    keyboard.add(web_button)
    await message.answer("Привет! Это ваш бот на aiogram.", reply_markup=keyboard)

# Обработка входящих текстовых сообщений
@dp.message_handler(content_types=types.ContentTypes.TEXT)
async def handle_text(message: types.Message):
    await message.answer(f"Вы написали: {message.text}")

# Отправка сообщения на веб-страницу
async def send_message_to_web(message):
    # Реализуйте логику отправки сообщения на веб-страницу (например, через WebSocket)
    pass

# Обработка входящих текстовых сообщений с отправкой на веб-страницу
@dp.message_handler(content_types=types.ContentTypes.TEXT)
async def handle_text_with_web(message: types.Message):
    await send_message_to_web(message)

# Веб-роуты
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    from aiogram import executor
    from threading import Thread

    # Запуск веб-приложения Flask в отдельном потоке
    web_thread = Thread(target=lambda: app.run(port=5000))
    web_thread.start()

    # Запуск бота aiogram
    executor.start_polling(dp, skip_updates=True)
