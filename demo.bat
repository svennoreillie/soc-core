@echo off
title Soc-Core Demo website
:start
echo. 
echo --------------------------------------------
echo --        Installing npm packages         --
echo --------------------------------------------
echo. 
call npm install
echo. 
echo --------------------------------------------
echo --             Running webpack            --
echo --------------------------------------------
echo. 
call npm run demobuild 
echo. 
echo --------------------------------------------
echo --             Starting server            --
echo --------------------------------------------
echo. 
call npm run demostart
echo. 
echo --------------------------------------------
echo --             Opening website            --
echo --------------------------------------------
echo. 
start chrome.exe localhost:8080
:end
