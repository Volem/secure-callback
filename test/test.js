var SecureCallback = require('../dist/securecallback');
var assert = require('assert');
var expect = require('expect');
var scThrowsException = new SecureCallback(true);
var scDefault = new SecureCallback();
var scThrowsExceptionWithMsg = new SecureCallback(true, "not a function.", 'callback required.');

describe('secureCallback', function () {
	describe('respond', function () {
		it('should not throw error', function () {
			expect(() => {
				scDefault.respond(function () {
					return;
				});
			}).toNotThrow(Error);
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error callback should be defined.', function () {
			expect(() => {
				scThrowsException.respond();
			}).toThrow(Error, 'callback should be defined.');
		});
	})
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error callback is not a function.', function () {
			var notaFunction = new Array(1);
			expect(() => { scThrowsException.respond(notaFunction) }).toThrow(Error, 'callback is not a function.');
		});
	});
});

describe('secureCallback', function () {
	var testObj = new SecureCallback(true);
	describe('respond', function () {
		it('should throw error not a function.', function () {
			var notaFunction = new Array(1);
			expect(() => { scThrowsExceptionWithMsg.respond(notaFunction) }).toThrow(Error, 'not a function.');
		});
	});
});

describe('secureCallback', function () {
	describe('respond', function () {
		it('should throw error callback required.', function () {
			expect(() => {
				scThrowsExceptionWithMsg.respond();
			}).toThrow(Error, 'callback required.');
		});
	})
});

