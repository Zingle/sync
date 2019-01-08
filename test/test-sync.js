const sync = require("..");
const expect = require("expect.js");

describe("sync()", () => {
    let done;

    beforeEach(() => {
        done = sync();
    });

    it("should return function that acts as Promise", () => {
        expect(done).to.be.a("function");
        expect(done.then).to.be.a("function");
        expect(done.catch).to.be.a("function");
    });

    it("should reject with error passed to function", async () => {
        done(new Error("foo"));

        return done.then(value => {
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

        return done.then(value => {
            expect(value).to.be(42);
        });
    });
});
