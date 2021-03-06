import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    company_name: schema.string({ trim: true }),
    fantasy_name: schema.string({ trim: true }),
    cnpj: schema.string({ trim: true }),
  })

  public messages = {}
}
