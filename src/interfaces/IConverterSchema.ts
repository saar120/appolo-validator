import {IConstraintClass, IConverterClass} from "./IConstraint";
import {IConstraintOptions} from "./IConstraintOptions";
import {IConverterOptions} from "./IConverterOptions";

export interface IConverterSchema {
    converter: IConverterClass
    options?: IConverterOptions
    args?: any[]
}
