var SecureCallback = require('../dist/securecallback');
var assert = require('assert');
var scThrowsException = new SecureCallback(true);
var scDefault = new SecureCallback();
var scThrowsExceptionWithMsg = new SecureCallback(true, "not a function.", 'callback required.');

describe('secureCallback', function () {
	describe('respond', function () {
		it('should not throw error', function () {
			assert.doesNotThrow(function () {
				scDefault.respond(function () {
					return;
				}, "arg1", "arg2");
				scDefault.respondsuccess(function(){
					return;
				}, 'success message', 'success message 2');
				scDefault.responderror(function(){
					return;
				});
				scDefault.respondsuccess(function(){
					return;
				});
			}, Error)
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error : callback should be defined.', function () {
			assert.throws(function () {
				scThrowsException.respond();
			}, /callback should be defined./);
		});
	})
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error :  callback is not a function.', function () {
			var notaFunction = new Array(1);
			assert.throws(function () {
				scThrowsException.respond(notaFunction);
			}, /callback is not a function./);
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error : callback required.', function () {
			assert.throws(function () {
				scThrowsExceptionWithMsg.respond();
			}, /callback required./);
		});
	})
});

describe('secureCallback', function () {
	var testObj = new SecureCallback(true);
	describe('respond', function () {
		it('should throw error : not a function.', function () {
			var notaFunction = new Array(1);
			assert.throws(function () {
				scThrowsException.respond(notaFunction);
			}, /not a function./);
		});
	});
});



