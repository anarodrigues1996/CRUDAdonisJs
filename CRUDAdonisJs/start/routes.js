'use strict'
const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.get('/users', 'UserController.index')
Route.get('/users/id:', 'UserController.show')
Route.post('/users', 'UserController.store')
Route.put('/users/id:', 'UserController.update')
Route.delete('/users/id:', 'UserController.delete')

