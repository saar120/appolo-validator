import {IConverter} from "../../../interfaces/IConverter";
import {ValidationParams} from "../../../interfaces/IConstraint";
import {registerConverter} from "../../../schema/registerConverter";
import {IConverterOptions} from "../../../interfaces/IConverterOptions";
import {Util} from "appolo-utils";
import {ArraySchema} from "../../array/arraySchema";
import {StringSchema} from "../stringSchema";

export class SanitizeConverter implements IConverter {

    public convert(params: ValidationParams): Promise<any> | any {
        let value: string = params.value;

        let regex = new RegExp(`[\\x00-\\x1F\\x7F]+`, 'g');

        return typeof value === 'string' ? value.replace(regex, "") : value
    }
}

registerConverter.extend({
    base: StringSchema,
    name: "sanitize",
    converter: SanitizeConverter
});


declare module '../stringSchema' {

    interface StringSchema {
        sanitize(options?: IConverterOptions): this;
    }
}

