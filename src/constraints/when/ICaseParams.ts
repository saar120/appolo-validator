import {AnySchema} from "../../schema/types/anySchema";
import {ValidationParams} from "../IConstraint";

export interface ICaseParams {
    schema?: AnySchema,
    value?: any,
    fn?: (params: ValidationParams, value: any) => boolean,
    groups?: string[]
    thenSchema?: AnySchema
}
