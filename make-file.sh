#!/bin/sh
# shebang
echo "Setting up project"
mkdir app
touch README.md
cd app
touch index.html
echo "<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
" >> index.html
touch style.css
touch script.js
cd ..
echo "Done"
