import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser'

class App extends React.Component{  
  constructor(props){
    super(props)
    this.state = {
        users:  [
            {
                id: 1,
                firstname:'Bob',
                lastname:'Marley',
                bio:'III leave from this town cause I was so sad',
                age:30,
                isHappy: true
            },
            {
                id: 2,
                firstname:'Stev',
                lastname:'Marley',
                bio:'LOL lolo lololo',
                age:22,
                isHappy: false
            },
        ]
    
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}
  render(){  return (<div className='Name'>
    <Header title="Шапка сайта" />
    <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
    </main>
    <aside>
      <AddUser onAdd={this.addUser} />
    </aside>
</div>)}

deleteUser(id){
  this.setState({
    users: this.state.users.filter((el)=> el.id !==id)
  })
}

editUser(user){
  let allUsers = this.state.users
  allUsers[user.id - 1] = user
   this.setState(
    {
    users: []
    },
    ()=> {
      this.setState({
        users: [...allUsers]
      })
    }
   )
}

addUser(user){
  const id = this.state.users.length + 1
  this.setState({users: [...this.state.users, {id, ...user}]})
}

}

export default App