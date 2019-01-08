Sync Function
=============
The `sync` function can be used to bridge async functions with traditional
continuation-passing style (CPS) functions.  Use the `sync` function to create
a `Promise` that can be passed as a callback to a function expecting CPS.

Example
-------
```js
const fs = require("fs");
const sync = require("sync");

async function asyncReadFile(file) {
    const done = sync();        // create synchronization primitive
    fs.readFile(file, done);    // pass primitive as CPS callback
    return done;                // return primitive from async function
}
```
