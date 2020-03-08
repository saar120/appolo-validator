"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anySchema_1 = require("../any/anySchema");
const registerSchema_1 = require("../../schema/registerSchema");
class ArraySchema extends anySchema_1.AnySchema {
    constructor(options = {}) {
        super(options);
        this._type = "array";
    }
}
exports.ArraySchema = ArraySchema;
function array(options) {
    let schema = registerSchema_1.registerSchema.extend({ type: ArraySchema, options });
    schema.isArray(options).toJson({ runIf: (params) => params.validateOptions.convert });
    return schema;
}
exports.array = array;
//# sourceMappingURL=arraySchema.js.map