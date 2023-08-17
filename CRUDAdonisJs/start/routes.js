'use strict'
const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})
Route.resource('/users', 'UserController').apiOnly()
Route.resource('/clients', 'ClientController').apiOnly()
Route.resource('/excercises', 'ExcerciseController').apiOnly()
Route.resource('/trainings', 'TrainingController').apiOnly()

