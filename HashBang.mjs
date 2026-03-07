#!/usr/bin/node

"use strict";

if (typeof document === "undefined")
  console.log("Hello, world!");
else
  document.body.innerText = "Hello, world!";

// You can execute this script directly on Linux with nodejs installed.

// You can also open HashBang.html in a web browser for proof that hashbang
// comments are legal in front-end code too, even in strict mode!
