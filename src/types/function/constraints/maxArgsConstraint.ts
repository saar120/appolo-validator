import {Objects, Promises} from "appolo-utils/index";
import {AnySchema} from "../../any/anySchema";
import {ValidationError} from "../../../common/errors/ValidationError";
import {IConstraint, IConstraintValidateResult, ValidationParams} from "../../../interfaces/IConstraint";
import {registerConstraint} from "../../../schema/registerConstraint";
import {ObjectSchema} from "../../object/objectSchema";
import {IConstraintOptions} from "../../../interfaces/IConstraintOptions";
import {Ref} from "../../../schema/ref";
import {FunctionSchema} from "../functionSchema";


export class MaxArgsConstraint implements IConstraint {

    public  validate(params: ValidationParams): IConstraintValidateResult {

        let isValid = params.value.length <= params.args[0] ;

        return {isValid};

    }

    public get type(): string {
        return "MaxArgs"
    }

    public get defaultMessage(): string {
        return "${property} args is over max args size"
    }
}

registerConstraint.extend({
    base: FunctionSchema,
    name: "maxArgs",
    constraint: MaxArgsConstraint
});

declare module '../functionSchema' {


    interface FunctionSchema {
        maxArgs(limit: number | Ref, options?: IConstraintOptions): this;
    }
}

