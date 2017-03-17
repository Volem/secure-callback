"use strict";
function isFunction(object) {
    return typeof (object) === 'function';
}
module.exports = (function () {
    function SecureCallback(throwException, notFunctionMsg, callbackRequiredMsg) {
        if (throwException === void 0) { throwException = false; }
        if (notFunctionMsg === void 0) { notFunctionMsg = null; }
        if (callbackRequiredMsg === void 0) { callbackRequiredMsg = null; }
        this.throwException = throwException || false;
        this.notFunctionMsg = notFunctionMsg || 'callback is not a function.';
        this.callbackRequiredMsg = callbackRequiredMsg || 'callback should be defined.';
    }
    SecureCallback.prototype.respond = function (callback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (callback) {
            if (isFunction(callback)) {
                callback.apply(this, args);
            }
            else if (this.throwException) {
                throw new Error(this.notFunctionMsg);
            }
        }
        else if (this.throwException) {
            throw new Error(this.callbackRequiredMsg);
        }
    };
    SecureCallback.prototype.respondsuccess = function (callback, successMsg) {
        if (successMsg === void 0) { successMsg = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.respond(callback, null, successMsg, args);
    };
    SecureCallback.prototype.responderror = function (callback, errorMsg) {
        if (errorMsg === void 0) { errorMsg = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.respond(callback, errorMsg, args);
    };
    return SecureCallback;
}());
