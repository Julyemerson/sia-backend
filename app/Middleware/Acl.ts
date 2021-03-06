import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoles: string[]
  ) {
    const user = await auth.authenticate()

    if (!allowedRoles.includes(user.role)) {
      return response.unauthorized({
        error: { message: 'Você não tem permissão para realizar esta ação' },
      })
    }

    await next()
  }
}
