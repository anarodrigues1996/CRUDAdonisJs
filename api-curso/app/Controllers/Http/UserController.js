'use strict'

class UserController {
    async index(){
        return{result: 'Buscou o user'}
    }
    async show(){
        return{result: 'Buscou o user 1'}
    }
    async store(){
        return{result: 'Criou o user '}
    }
    async update(){
        return{result: 'Actualizou o user 1'}
    }
    async delete(){
        return{result: 'Deletou o user 1'}
    }
}

module.exports = UserController
