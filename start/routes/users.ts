import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
  })
