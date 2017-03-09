# secure-callback [![Build Status](https://travis-ci.org/Volem/secure-callback.svg?branch=master)](https://travis-ci.org/Volem/secure-callback)  

We all check that the callback function is available and if we forget to check we may end up strange errors. So how do we check? Let me write quickly, I believe you will remember :)
``` javascript
if (callback) {
	callback(err);
}
return;
```
This is a very simple package to remove these lines of code and also provides custom message when you forgot to provide callback. A simple class which takes 3 arguments and all optional. 
* First argument determines if you want to throw exception or not. 
* Second argument is a custom message when you provide something else than a function by mistake. (Default message : callback is not a function.)
* Third argument is also a custom message when you forgot to provide the callback function. (Default message : callback should be defined.)

## Usage
``` javascript
var securecallback = require('secure-callback');
var secure = new securecallback();
...
// In your function that has callback use secure.respond
// Pass your callback and any number of arguments for your callback.
function callbackTest(callback) {
	secure.respond(callback, null, 'success messsage');
}
```

Enjoy..
