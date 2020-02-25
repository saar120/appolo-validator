"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anySchema_1 = require("./anySchema");
const numberConstraint_1 = require("../../constraints/numbers/numberConstraint");
class NumberSchema extends anySchema_1.AnySchema {
    constructor(options = {}) {
        super(options);
        this._type = "number";
        this.addConstraint({
            constraint: numberConstraint_1.NumberConstraint,
            options: options,
            args: []
        });
    }
    beforeValidate(options) {
        if (options.convert) {
            this.addConverter({
                converter: require("../../converters/numbers/numberConverter").NumberConverter,
                args: []
            }, true);
        }
        return super.beforeValidate(options);
    }
}
exports.NumberSchema = NumberSchema;
function number(options) {
    return new NumberSchema(options);
}
exports.number = number;
//# sourceMappingURL=numberSchema.js.map