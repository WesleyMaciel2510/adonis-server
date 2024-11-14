/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|--------------------------------------------------------------------------
| CLEAN CODE FOR CRUD USING 'RESOURCE'
| The .resource will generate the following routes:
| GET /api/{route} — To fetch all items.
| GET /api/{route}/:id — To fetch a specific item by ID.
| POST /api/{route} — To create a new item.
| PUT /api/{route}/:id — To update an existing item by ID.
| DELETE /api/{route}/:id — To delete a item by ID.
|
|--------------------------------------------------------------------------
|*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world'}
})

// Routes for CartItemsController
Route.group(() => {
  Route.resource('/cartItems', 'CartItemsController').apiOnly()
}).prefix('/api')

// Routes for OrderItemController
Route.group(() => {
  Route.resource('/orderItems', 'OrderItemController').apiOnly()
}).prefix('/api')

// Routes for OrdersController
Route.group(() => {
  Route.resource('/orders', 'OrdersController').apiOnly()
}).prefix('/api')

// Routes for ProductsController
Route.group(() => {
  Route.resource('/products', 'ProductsController').apiOnly()
}).prefix('/api')

// Routes for StoresController
Route.group(() => {
  Route.resource('/stores', 'StoresController').apiOnly()
}).prefix('/api')

// Routes for UsersController
Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly()
}).prefix('/api')

