@ECHO OFF
SETLOCAL EnableDelayedExpansion 
CLS   
REM COLOR A

SET folderDate=%date:~10,4%%date:~4,2%%date:~7,2%
SET currentDirectory=%cd%
SET makeDirectory=%currentDirectory%\%folderDate%

MKDIR %makeDirectory%
ECHO Created "%makeDirectory%"