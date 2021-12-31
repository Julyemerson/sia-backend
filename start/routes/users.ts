import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
