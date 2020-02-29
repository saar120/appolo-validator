import {IConstraintClass} from "../constraints/IConstraint";
import {Arrays, Objects} from "appolo-utils"
import {IConstraintSchema} from "../interfaces/IConstraintSchema";
import {AnySchema} from "./types/anySchema";
import {ReflectMetadata} from "appolo-utils/index";
import {PropertySymbol} from "../decorators/registerDecorator";


interface IExtendParams {
    name: string,
    constraint: IConstraintClass,
    base: typeof AnySchema,
    whiteList?: boolean,
    blackList?: boolean
}



export class RegisterConstraint {

    private _constraints = new Map<typeof AnySchema, IExtendParams[]>();

    public extend(params: IExtendParams) {

        if(!this._constraints.has(params.base)){
            this._constraints.set(params.base,[]);
        }

        this._constraints.get(params.base).push(params);

        params.base.prototype[params.name] = function (this: AnySchema) {

            let args = Array.from(arguments), options = args[args.length - 1];

            let config: IConstraintSchema = {
                args: args,
                constraint: params.constraint,
                options: Objects.isPlain(options) ? options : {},
                whiteList: params.whiteList,
                blackList: params.blackList
            };

            this.addConstraint(config);

            return this;
        };
    }

    public get constraints() {
        return this._constraints;
    }

}

export const registerConstraint = new RegisterConstraint();
