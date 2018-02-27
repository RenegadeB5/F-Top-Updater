@echo off

:start

node bot-pc.js

timeout /t 1800

del /f %cd%\screenshots\*.png

goto start
