import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    companyName: schema.string({ trim: true }),
    fantasyName: schema.string({ trim: true }),
    cnpj: schema.string({ trim: true }, [rules.unique({ table: 'companies', column: 'cnpj' })]),
  })

  public messages = {}
}
