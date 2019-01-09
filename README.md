Sync Function
=============
The `sync` function can be used to bridge async functions with traditional
continuation-passing style (CPS) functions.  Use the `sync` function to create
a callback with an associated `Promise` which can be used as a deferred result
for the callback.

Example
-------
```js
const fs = require("fs");
const sync = require("sync");

async function asyncReadFile(file) {
    const done = sync();        // create synchronization primitive
    fs.readFile(file, done);    // pass primitive as CPS callback
    return done.promise;        // return resulting promise
}
```
