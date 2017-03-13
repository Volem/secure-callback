// Type definitions for [secure-callback] [1.1.7]
// Project: [Secure Callback]
// Definitions by: [volem] <[nodejs.withvolkan.com]>
/// <reference types="typescript" />
/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = SecureCallback;

export module SecureCallback {
    declare class SecureCallback {
        constructor(throwException?: Boolean, notFunctionMsg?: string, callbackRequiredMsg?: string);

        respond(callback: Function, ...args): void;
        respondsuccess(callback: Function, successMsg?: string, ...args): void;
        responderror(callback: Function, errorMsg?: string, ...args): void;
    }
}

