import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const user = await User.create(data)

    return user
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    user.merge(data)

    await user.save()

    return data
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
