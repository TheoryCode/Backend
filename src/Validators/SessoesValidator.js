const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "O id do usuário não é válido")
    })
});

const update = validateRequest({
    body: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "O id do usuário não é válido"),
        tempo_login: z.date().optional(),
        id_projeto: z.string().optional()
    }).strict(),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id da sessão não é válido"),
    }).strict()
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id da sessão não é válido"),
    })
})

module.exports = {
    create,
    destroy,
    update, 
};