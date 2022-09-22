'use strict'

const openModel = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'Narah',
    email:'narah@gmail.com',
    celular: '898546575',
    cidade: 'fortaleza'
}

const createClient = (client) => {
    localStorage.setItem('db_client', client)

}



document.getElementById('cadastrarCliente')
    .addEventListener('click', openModel)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

