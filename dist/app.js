"use strict";
class Departament {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Departament("Accounting");
accounting.describe();
//# sourceMappingURL=app.js.map