/*
Steps to setup:
1.) tsc --init          (creates a simple typescript config file)
2.) npm init -y         (-y for less questions, makes node package json file)
3.) make index.html
4.) mkdir src           (make src directory, where you write code. Aka this is our written typescript code)
5.) mkdir dist          (distribution, gets on to production and served to end user. Aka this is our compiled javascript code)
6.) update html to point to js compiled code in dist folder (<script src="./dist/index.js"></script> <!--Points to our generated js code-->)
7.) go to tsconfig "outDir"   (Note: CRTL + "/" uncomments a line, lol)
8.) type code into index.ts
9.) in terminal, type:   tsc src/index.ts      (makes js in our src folder, but want in dist folder)
10.) tsc -w                                    (makes our folder into "watch mode", if any change in typescript, it will update in dist)
11.) can install: npm i lite-server for html server (I have the live server extension)
*/

export {};