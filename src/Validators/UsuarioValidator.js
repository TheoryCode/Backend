const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

//{
 //   "nome": "teste",
 //   "cargo": "chefe de todos",
 //   "email": "teste@teste.com",
  //  "senha": "cpejr123"
//}

const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "O nome é obrigatório"}),
        cargo: z.string({required_error: "O cargo é obrigatório"}),
        email: z.string({required_error: "O email é obrigatório"}).email("O email é inválido"),
        senha: z.string({required_error: "A senha é obrigatória"}),

    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
    })
})

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        cargo: z.string().optional(),
        email: z.string().email("O email é inválido").optional(),
        senha: z.string().optional(),

    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),

    }),
})



module.exports = {
    create,
    destroy,
    update,
};