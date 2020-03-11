'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const benchmark = require("benchmark");
const Joi = require("@hapi/joi");
const index_1 = require("../index");
(async function () {
    let suite = new benchmark.Suite();
    let validator = await index_1.validation();
    // suite.add('set', async function () {
    //     let schema = Joi.array().items(Joi.object({
    //         id: Joi.string().required(),
    //         level: Joi.string()
    //             .valid('debug', 'info', 'notice', 'warning')
    //             .required()
    //     }));
    //
    //     try {
    //         let result = await schema.validateAsync([{id: '1', level: 'info'}, {id: '2', level: 'warning'}]);
    //     } catch (e) {
    //         console.log(e)
    //     }
    //
    //
    // });
    //
    // let schema = array().items(object().keys({
    //     id: string().required(),
    //     level: string().valid(['debug', 'info', 'notice']).required()
    // }));
    //
    // suite.add('set2', async function () {
    //
    //     let result = await validator.validate(schema, [{id: '1', level: 'info'},
    //         {id: '2', level: 'warning'}])
    // });
    let schema = index_1.number();
    suite.add('set3', async function () {
        let result = await validator.validate(schema, 1);
    });
    suite.add('set', async function () {
        let schema = Joi.number();
        try {
            let result = await schema.validateAsync(1);
        }
        catch (e) {
            console.log(e);
        }
    });
    suite.on('cycle', (event) => {
        console.log(String(event.target));
        if (event.target.error)
            console.error(event.target.error);
    })
        .run({ async: true });
})();
//# sourceMappingURL=index.js.map