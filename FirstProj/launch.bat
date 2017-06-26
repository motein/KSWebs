@echo off
set "currentDir=%~dp0"
set "fileName=index.html"
set "absPath=%currentDir%%fileName%"
start iexplore %absPath%