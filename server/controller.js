const users = require('../users.json')
//Option one
// let id = 51
let id = users[users.length - 1].id +1
// const id = user
//if you want to add a new user id, you start with the last id plus one. users has 50 ids, so plus one is 51. Option two removes the need for id++ in createUser below.

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users)
    },
    getOneUser: (req, res) => {
        const {id} = req.params

        if(!id) {
            return res.status(404).send('Unable to find resource')
        }

        const user = users.find(user => user.id === +id)

        if(!user) {
            return res.status(500).send('Unable to find user')
        }

        res.status(200).send(users)
    },

    createUser: (req, res) => {
        // const {newUser} = req.body
        const {first_name, last_name, email} = req.body
        //creating a whole object from the body. This will only have info from the client. This new user will not have access to id - client can't pick their own id. We want to control what the id is for each object. 
        let newUser = {id, first_name, last_name, email}
        // newUser.id = id;
        users.push(newUser)
        id++
        res.status(200).send(users)
    },

    updateUser: (req, res) => {
        const {updatedUser} = req.body;
        const {id} = req.params;

        const index = users.findIndex(elem => elem.id === +id)
        //controller.js
        users[index] = {...users[index], ...updatedUser}
        res.status(200).send(users)
    },

    deleteUser: (req, res) => {
        const {id} = req.params;

        const index = user.findIndex(elem => elem.id === +id)

        users.splice(index, 1)

        res.status(200).send(users)
    }


}

