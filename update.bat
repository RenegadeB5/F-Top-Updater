@echo off

:start

node bot-pc.js

timeout /t 20

del /f %cd%\screenshots\*.png

timeout /t 1780

goto start
