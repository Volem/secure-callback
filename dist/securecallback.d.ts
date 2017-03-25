// Type definitions for [secure-callback] [1.1.7]
// Project: [Secure Callback]
// Definitions by: [volem] <[nodejs.withvolkan.com]>
/// <reference types="typescript" />
/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

export = SC.SecureCallback

module SC {
    declare class SecureCallback {
        constructor(throwException?: Boolean, notFunctionMsg?: string, callbackRequiredMsg?: string);

        respond(callback: Function, ...args): void;
        respondsuccess(callback: Function, ...args): void;
    }
}

