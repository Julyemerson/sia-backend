import Route from '@ioc:Adonis/Core/Route'

Route.resource('/appointments', 'AppointmentsController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
