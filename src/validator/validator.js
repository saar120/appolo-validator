"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_engine_1 = require("appolo-engine");
const index_1 = require("appolo-utils/index");
const defaults_1 = require("../defaults/defaults");
const schemaValidator_1 = require("../schema/schemaValidator");
const anySchema_1 = require("../schema/types/anySchema");
const when_1 = require("../constraints/when/when");
let Validator = class Validator {
    // public schema(options: ISchemaOptions = {}) {
    //
    //     options = Objects.defaults({}, options, this.options, ValidatorDefaults);
    //
    //     return new Schema(options);
    // }
    async validate(schema, value, options = {}) {
        if (schema instanceof when_1.When) {
            schema = anySchema_1.any().if(schema);
        }
        options = index_1.Objects.defaults({}, options, schema.getOptions(), this.options, defaults_1.ValidateDefaults);
        let result = await this.createSchemaValidator().validate(value, schema, options);
        return result;
    }
    async validateAndTrow(schema, value, options) {
        throw new Error("not implemented");
    }
};
tslib_1.__decorate([
    appolo_engine_1.inject()
], Validator.prototype, "options", void 0);
tslib_1.__decorate([
    appolo_engine_1.injectFactoryMethod(schemaValidator_1.SchemaValidator)
], Validator.prototype, "createSchemaValidator", void 0);
Validator = tslib_1.__decorate([
    appolo_engine_1.define(),
    appolo_engine_1.singleton()
], Validator);
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map