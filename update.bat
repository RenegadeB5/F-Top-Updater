@echo off

:start

node bot-pc.js

timeout /t 15

del /f *.png

timeout /t 1800

goto start
