import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from './AddUser';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false, // Состояние для отображения формы редактирования
        };
    }

    render() {
        const { user, onDelete } = this.props; // Деструктуризация props для удобства

        return (
            <div className="user">
                {/* Иконка удаления */}
                <IoCloseCircleSharp
                    onClick={() => onDelete(user.id)} // Вызываем функцию onDelete с ID пользователя
                    className="delete-icon"
                />

                {/* Иконка редактирования */}
                <IoHammerSharp
                    onClick={() =>
                        this.setState({
                            editForm: !this.state.editForm, // Переключаем состояние editForm
                        })
                    }
                    className="edit-icon"
                />

                {/* Информация о пользователе */}
                <h3>
                    {user.firstname} {user.lastname}
                </h3>
                <p>{user.bio}</p>
                <b>{user.isHappy ? 'Happy :)' : 'Sad :('}</b>

                {/* Условный рендеринг формы редактирования */}
                {this.state.editForm && <AddUser user={user} onAdd={this.props.onEdit} />}
            </div>
        );
    }
}

export default User;