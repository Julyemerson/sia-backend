import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateAppointmentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    companyId: schema.number(),
    userId: schema.number(),
    appointmentDate: schema.date(),
  })

  public messages = {}
}
