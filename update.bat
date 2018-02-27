@echo off

:start

node bot-pc.js

timeout /t 7

del /f %cd%\screenshots\*.png

timeout /t 1793

goto start
