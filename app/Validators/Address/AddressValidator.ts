import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class AddressValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    public_place: schema.string({ trim: true }), //logradouro
    neighborhood: schema.string({ trim: true }),
    state: schema.string({ trim: true }),
    number: schema.string({ trim: true }),
    reference: schema.string({ trim: true }),
    company_id: schema.number(),
  })

  public messages = {}
}
