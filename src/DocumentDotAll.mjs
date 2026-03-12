// (This one doesn't work in NodeJS, obviously)

console.log(document.all); // HTMLAllCollection(...) [...]
if (document.all)
  console.log("The client is Microsoft® Internet Explorer™");
else if (typeof document.all === 'undefined')
  console.log("The client is a modern browser (or a REALLY old one)");

console.log('all' in document); // true
