'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExcerciseSchema extends Schema {
  up () {
    this.create('excercises', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('observacao', 200)
      table.integer('series')
      table.integer('waiting_time')
      table.string('url_image', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('excercises')
  }
}

module.exports = ExcerciseSchema
