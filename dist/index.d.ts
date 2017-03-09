// Type definitions for [secure-callback] [1.1.7]
// Project: [Secure Callback]
// Definitions by: [volem] <[nodejs.withvolkan.com]>

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = SecureCallback;

/*~ Write your module's methods and properties in this class */
declare class SecureCallback {
    constructor(throwException: Boolean = false, notFunctionMsg: string = null, callbackRequiredMsg: string = null);

    respond(callback: Function, ...args) : void;
}
