import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AddressValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    street: schema.string({ trim: true }), //logradouro
    neighborhood: schema.string({ trim: true }),
    city: schema.string({ trim: true }),
    state: schema.string({ trim: true }),
    number: schema.string({ trim: true }),
  })

  public messages = {}
}
