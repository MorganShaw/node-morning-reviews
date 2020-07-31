const express = require('express');
// const ctrl = require('./controller')
//could do the following instead of const ctrl above, which destructures it and makes the "ctrl" in "ctrl.getAllUsers" unnecessary.
const {getAllUsers getOneUser, createUser, updateUser, deleteUser} = require('./controller')
const app = express();
app.use(express.json());

const port = 4321;

app.get('/api/users', getAllUsers)
app.get('/api/users/:id', getOneUser)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.delete('/api/users/:id', deleteUser)

//     if(!id) {
//         return res.status(404).send('Unable to find resource')
//     }

//     const user = users.find(user => user.id === +id)

//     if(!user) {
//         return res.status(500).send('Unable to find user')
//     }
//     res.status(200).send(user)
// })

app.listen(port, () => console.log(`Server running on port ${port}`));



//status codes are important. 400s mean there's something wrong with the front-end. 500 means that there's something wrong in the back-end - and that the code broke somewhere.

//How does the client know what id to request? The API? Is the client react (or front-end software)?

//First step - test your endpoints. Open browser and see if it works. http://localhost:port/api/user...


//Looking at front-end (see morning review recording from 7/29/20. It's only a few minutes long):

// import axios from 'axios';

// class DeleteButton extends React.Component() {
//     deleteUser = () => {
//         axios.delete(`http://localhost4321/api/users/${id}`)
//         .then(res => {
//             this.setState({
//                 users: res.data
//             })
//         })
//     }

//     render(){
//         return (
//             <div className='button-container'>
//                 <button onClick={() => this.deleteUser(id)}></button>
//             </div>
//         )
//     }
// }