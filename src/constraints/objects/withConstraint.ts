import {Objects, Promises} from "appolo-utils/index";
import {AnySchema} from "../../schema/types/anySchema";
import {ValidationError} from "../../common/errors/ValidationError";
import {IConstraint, IConstraintValidateResult, ValidationParams} from "../IConstraint";
import {registerConstraint} from "../registerConstraint";
import {ObjectSchema} from "../../schema/types/objectSchema";
import {IConstraintOptions} from "../../interfaces/IConstraintOptions";
import {Arrays} from "appolo-utils";


export class WithConstraint implements IConstraint {

    public async validate(params: ValidationParams): Promise<IConstraintValidateResult> {

        let key = params.args[0];
        let peers = Arrays.arrayify(params.args[1]);

        if (params.value[key] === undefined) {
            return {isValid: true};
        }

        for (let i = 0; i < peers.length; i++) {
            if (params.value[peers[i] as any] === undefined) {
                return {isValid: false}
            }
        }

        return {isValid: true};

    }

    public get type(): string {
        return "with"
    }

    public defaultMessage(args: ValidationParams): string {
        return `Property that should have been present at the same time as another one was missing.`
    }
}

registerConstraint.extend({
    base: ObjectSchema,
    name: "with",
    constraint: WithConstraint
});

declare module '../../schema/types/objectSchema' {


    interface ObjectSchema {
        with(key: string, peers: string | string[], options?: IConstraintOptions): this;
    }
}

