function isFunction(object) {
	return typeof (object) === 'function';
}

export = class SecureCallback {
	throwException: Boolean;
	notFunctionMsg: string;
	callbackRequiredMsg: string;

	constructor(throwException: Boolean = false, notFunctionMsg: string = null, callbackRequiredMsg: string = null) {
		this.throwException = throwException ? throwException : false;
		this.notFunctionMsg = notFunctionMsg ? notFunctionMsg : 'callback is not a function.';
		this.callbackRequiredMsg = callbackRequiredMsg ? callbackRequiredMsg : 'callback should be defined.';
	}

	respond(callback: Function, ...args) {
		if (callback) {
			if (isFunction(callback)) {
				callback.apply(this, args);
			} else if (this.throwException) {
				throw new Error(this.notFunctionMsg);
			}
		} else if (this.throwException) {
			throw new Error(this.callbackRequiredMsg);
		}
	}

	respondsuccess(callback: Function, successMsg: string = null, ...args) {
		this.respond(callback, null, successMsg, args);
	}

	responderror(callback: Function, errorMsg: string = null, ...args) {
		this.respond(callback, errorMsg, args);
	}
}

