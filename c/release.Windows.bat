del /s "..\lib\Windows\miner.Windows.x64.debug.dll" >nul 2>&1
del /s "..\lib\Windows\miner.Windows.x64.release.dll" >nul 2>&1

.\cl.clean.bat
.\cl.dll.Windows.x64.debug.bat
copy "output\miner.Windows.x64.debug.dll" "..\lib\Windows\miner.Windows.x64.debug.dll"

.\cl.clean.bat
.\cl.dll.Windows.x64.release.bat
copy "output\miner.Windows.x64.release.dll" "..\lib\Windows\miner.Windows.x64.release.dll"

.\cl.clean.bat
