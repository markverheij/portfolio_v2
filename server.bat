@echo off
set server=rails server -b 127.0.0.1 -p 7090

ECHO ========================================
ECHO =========SmitsVerheij POWER!============
ECHO ========================================
ECHO ====Enter start to restart the server===
ECHO ========================================
ECHO.

del .\tmp\pids\*.* /s /q
DOSKEY start=%server%
cmd /K %server%
@echo on
pause