'use strict'

const openModel = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'pedro',
    email:'pedro@gmail.com',
    celular: '898546575',
    cidade: 'fortaleza'
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify (dbClient))

const updateCliet = (index, client) => {
    const dbClient = readClient() 
    dbClient[index] = client 
    setLocalStorage(dbClient)
}

const deletClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModel)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

