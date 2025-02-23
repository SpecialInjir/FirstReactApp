import React from 'react';

class Users extends React.Component{
    users = [
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

    render()
    {
        if(this.users.length>0)
            return(<div>
                {this.users.map((el)=> (<div className="user" key={el.id}>
                    <h3> {el.firstname} {el.lastname}</h3>
                    <p>{el.bio}</p>
                    <b>{el.isHappy ? 'Happy :)' : 'Sad :('}</b>
                </div>))}
            </div>)
        else
        return(<div className="user"><h3>Нет пользователей</h3></div>)

    }

  
}

export default Users