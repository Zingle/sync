const {assign} = Object;

/**
 * Return synchronization callback.  Pass this callback to a function using
 * continuation-passing style, then use it like a Promise.
 * @returns {function|Promise}
 */
function sync() {
    let sync;

    const promise = new Promise((resolve, reject) => {
        sync = function done(err, result) {
            if (err) reject(err); else resolve(result);
        };
    });

    return assign(sync, {
        then: promise.then.bind(promise),
        catch: promise.catch.bind(promise)
    });
}

module.exports = sync;
