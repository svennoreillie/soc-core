@echo off
title Soc-Core Demo website
:start
echo. 
echo --------------------------------------------
echo --        Installing npm packages         --
echo --------------------------------------------
echo. 
call npm install
cls
echo. 
echo --------------------------------------------
echo --             Running webpack            --
echo --------------------------------------------
echo. 
call npm run build 
cls
echo. 
echo --------------------------------------------
echo --             Starting server            --
echo --------------------------------------------
echo. 
call npm start
:end
