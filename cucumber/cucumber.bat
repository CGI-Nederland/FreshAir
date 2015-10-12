@echo off
cls
echo Compiling...
call mvn clean test-compile
echo.
echo Running tests...
ansicon java -cp "target/test-classes/*;target/test-classes/Steps;%LOCAL_REPO%;." cucumber.api.cli.Main -p progress  -g target/test-classes target\test-classes
echo.
echo Done
echo.
