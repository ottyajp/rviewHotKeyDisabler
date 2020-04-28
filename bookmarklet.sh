#!/bin/sh

curl -X POST -d"compilation_level=SIMPLE_OPTIMIZATIONS&output_format=text&output_info=compiled_code&code_url=https%3A%2F%2Fraw.githubusercontent.com%2Fottyajp%2FrviewHotKeyDisabler%2Fmaster%2Fscript.js" https://closure-compiler.appspot.com/compile
