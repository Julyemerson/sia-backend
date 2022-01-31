import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreAppointmentValidator, UpdateAppointmentValidator } from 'App/Validators/appointment'
import Appointment from 'App/Models/Appointment'

export default class AppointmentsController {
  public async index({}: HttpContextContract) {
    const appointments = await Appointment.all()

    return appointments
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreAppointmentValidator)

    const appointment = await Appointment.create(data)

    return appointment
  }

  public async show({ params }: HttpContextContract) {
    const appointment = await Appointment.findOrFail(params.id)

    return appointment
  }

  public async update({ params, request }: HttpContextContract) {
    const appointment = await Appointment.findOrFail(params.id)
    const data = await request.validate(UpdateAppointmentValidator)

    appointment.merge(data)
    await appointment.save()

    return appointment
  }

  public async destroy({ params }: HttpContextContract) {
    const appointment = await Appointment.findOrFail(params.id)

    await appointment.delete()
  }
}
