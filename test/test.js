var SecureCallback = require('../dist/securecallback');
var assert = require('assert');
var scThrowsException = new SecureCallback(true);
var scDefault = new SecureCallback();
var scThrowsExceptionWithMsg = new SecureCallback(true, "not a function.", 'callback required.');

describe('secureCallback', function () {
	describe('respond', function () {
		it('should not throw error', function (done) {
			assert.doesNotThrow(function () {
				scDefault.respond(function () {
					return;
				}, "arg1", "arg2");
			}, Error)
			done();
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error : callback should be defined.', function (done) {
			assert.throws(function () {
				scThrowsException.respond();
			}, /callback should be defined./);
			done();
		});
	})
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error :  callback is not a function.', function (done) {
			var notaFunction = new Array(1);
			assert.throws(function () {
				scThrowsException.respond(notaFunction);
			}, /callback is not a function./);
			done();
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error : callback required.', function (done) {
			assert.throws(function () {
				scThrowsExceptionWithMsg.respond();

			}, /callback required./);
			done();
		});
	})
});

describe('secureCallback', function () {
	var testObj = new SecureCallback(true);
	describe('respond', function () {
		it('should throw error : not a function.', function (done) {
			var notaFunction = new Array(1);
			assert.throws(function () {
				scThrowsException.respond(notaFunction);

			}, /not a function./);
			done();
		});
	});
});



