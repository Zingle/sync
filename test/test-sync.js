const sync = require("..");
const expect = require("expect.js");

describe("sync()", () => {
    let done;

    beforeEach(() => {
        done = sync();
    });

    it("should return callback function", () => {
        expect(done).to.be.a("function");
    });

    it("should assign promise to callback", () => {
        expect(done.promise).to.be.a(Promise);
    });

    it("should reject with error passed to function", async () => {
        done(new Error("foo"));

        return done.promise.then(value => {
            return false;
        }).catch(err => {
            expect(err.message).to.be("foo");
            return true;
        }).then(errored => {
            expect(errored).to.be(true);
        });
    });

    it("should resolve with second argument passed to function", async () => {
        done(null, 42);

        return done.promise.then(value => {
            expect(value).to.be(42);
        });
    });
});
