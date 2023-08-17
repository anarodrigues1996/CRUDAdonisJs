'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExcerciseTrainingSchema extends Schema {
  up () {
    this.create('excercise_training', (table) => {
      table.increments()
      table.integer('excercises_id').unsigned().references('id').inTable('excercises').notNullable()
      table.integer('training_id').unsigned().references('id').inTable('trainings').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('excercise_training')
  }
}

module.exports = ExcerciseTrainingSchema
