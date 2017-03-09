function isFunction(object) {
	return typeof (object) === 'function';
}

class SecureCallback {
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
				callback(args);
			} else if (this.throwException) {
				throw new Error(this.notFunctionMsg);
			}
		}
		if (this.throwException) {
			throw new Error(this.callbackRequiredMsg);
		}
	}
}

export = SecureCallback;

