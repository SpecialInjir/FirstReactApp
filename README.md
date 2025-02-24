### 1 Знакомство с JSX в React JS

Что такое JSX?
JSX расшифровывается как JavaScript XML. JSX — это расширение для языка JavaScript. При помощи JSX вы можете описывать HTML код внутри JavaScript файлов без каких-либо проблем.

Если бы не JSX, то описание каждого тега было бы долгим. Нужно было создать объект, добавить к нему атрибуты и возможные стили. Пример без JSX:

ReactDOM.render(React.createElement('input', {
placeholder: 'Some text',
value: 'some'
}), document.getElementById("app");
Такой же участок кода при помощи JSX выглядит намного проще и красивее:
ReactDOM.render(<input placeholder='Some text' value='some' />, document.getElementById("app");

### 2 Создание компонентов и их использование, создание стилей и их подключение, пример использования изобраджений как компонентов и как ресурсов.

_Можно создавать компоненты как функции, но чаще всего используют как классы._

### Создание компонентов, как функций

```
const Header = () =>{
return(<header>Шапка сайта</header>)
}

const App = () => {
    return (<div className='Name'>
        <Header />
        <h1>{helpText}</h1>
        <input
        placeholder={helpText}
        onClick={inputClick}
        onMouseEnter={mouseOver}
        />
    <p >{helpText ==="net" ? "net": "da"}</p>
    </div>)
}
```

### // Создание компонентов, как классы, чаще всего это используется

```
class App extends React.Component{
 helpText ='Random Text'
  render(){  return (<div className='Name'>
    <Header title="Шапка сайта" />
    <h1>{this.helpText}</h1>
    <input
    placeholder={this.helpText}
    onClick={this.inputClick}
    onMouseEnter={this.mouseOver}
    />
<p >{this.helpText ==="net" ? "net": "da"}</p>
//вывод изображений по разному
<Image image={logo}/>
<img src={logo}></img>
</div>)}

 inputClick = () => console.log("Clicked!")
 mouseOver = () => console.log("Mouse moved!")
}

export default App
```

### 3 Использование состояний

Благодаря состояниям мф можем динамически менять содержимое вашего сайта. За урок вы научитесь выводить и устанавливать значения внутрь состояний в React JS.

````
 constructor(props){
        super(props)
    //состояния
        this.state ={
            helpText: "Help Text",
            userData: ""
        }

   //для собственных функций нужно передавать и связывать состояние, для встроенных, как render() не нужно
        this.inputClick = this.inputClick.bind(this)
    }

 render(){  return (<div className='Name'>
    <Header title="Шапка сайта" />
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input
    placeholder={this.state.helpText}
    //вывод инфы введенной сразу же
    onChange ={event => this.setState({userData: event.target.value})}
    onClick={this.inputClick}
    onMouseEnter={this.mouseOver}
    />
</div>)}

 inputClick() {
    //изменение состояния сразу при клике обновление
    this.setState({helpText: "Changed"})
    console.log("Clicked!")
}
 mouseOver = () => console.log("Mouse moved!")

    ```
````

### 4 Использование веб хуков

Когда вилим что то начинающеся с use - это веб-хук, некое действие, которое будет выполняться в автоматическом режиме

Хуки позволяют выполнять действия связанные с пользователем или приложением. К примеру, ранее для создания состояния мы использовали конструктор в классе. Если вы прописываете функцию вместо класса, то в ней нельзя создать конструктор. Поэтому на замену этому подходу были предложены хуки, что выполняют схожие действия.

componentDidUpdate Для классов

```
    componentDidUpdate(prevProp){
        if(this.state.helpText !== "Help"){
            console.log("Some")
        }
    }
```

useEffect для функций

```
useEffect(()=>{
    document.title =`Вы нажали ${click} раз`
  })
```

### 5 Работа с массивом

```
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

```

### 6 Работа с формой, добавление элементов

Давайте разберем этот код построчно с комментариями, чтобы понять, как работают формы в React и как взаимодействуют компоненты.

---

### **Компонент `AddUser`**

```javascript
class AddUser extends React.Component {
  constructor(props) {
    super(props);
    // Инициализация состояния (state) для хранения данных формы
    this.state = {
      firstname: "", // Имя пользователя
      lastname: "", // Фамилия пользователя
      bio: "", // Биография пользователя
      age: 1, // Возраст пользователя (по умолчанию 1)
      isHappy: false, // Состояние "счастлив" (по умолчанию false)
    };
  }

  render() {
    return (
      <form>
        {/* Поле ввода имени */}
        <input
          placeholder="Имя"
          onChange={(e) => this.setState({ firstname: e.target.value })}
          // При изменении значения в поле вызывается setState,
          // который обновляет состояние `firstname`
        />

        {/* Поле ввода фамилии */}
        <input
          placeholder="Фамилия"
          onChange={(e) => this.setState({ lastname: e.target.value })}
          // Аналогично обновляется состояние `lastname`
        />

        {/* Поле ввода биографии */}
        <textarea
          placeholder="Биография"
          onChange={(e) => this.setState({ bio: e.target.value })}
          // Обновление состояния `bio`
        ></textarea>

        {/* Поле ввода возраста */}
        <input
          placeholder="Возраст"
          onChange={(e) => this.setState({ age: e.target.value })}
          // Обновление состояния `age`
        />

        {/* Чекбокс для статуса "счастлив" */}
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
          // Обновление состояния `isHappy` на основе checked-значения
        />

        {/* Кнопка для отправки данных */}
        <button
          type="button" // Указываем type="button", чтобы форма не отправлялась автоматически
          onClick={() =>
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            })
          }
          // При нажатии кнопки вызывается функция onAdd из props,
          // которая передает текущие данные формы в родительский компонент
        >
          Добавить
        </button>
      </form>
    );
  }
}
export default AddUser;
```

**Объяснение работы `AddUser`:**

- Этот компонент представляет форму для добавления нового пользователя.
- Внутри конструктора инициализируется состояние (`state`) для хранения данных формы.
- Для каждого поля ввода используется обработчик `onChange`, который обновляет соответствующее поле в состоянии при изменении значения.
- Когда пользователь нажимает кнопку "Добавить", вызывается функция `onAdd` из `props`. Она передает текущие данные формы в родительский компонент.

---

### **Компонент `App`**

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    // Инициализация состояния для хранения списка пользователей
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "I will leave from this town cause I was so sad",
          age: 30,
          isHappy: true,
        },
        {
          id: 2,
          firstname: "Stev",
          lastname: "Marley",
          bio: "LOL lolo lololo",
          age: 22,
          isHappy: false,
        },
      ],
    };
    // Привязка метода addUser к контексту класса
    this.addUser = this.addUser.bind(this);
  }

  render() {
    return (
      <div className="Name">
        {/* Компонент Header для отображения заголовка */}
        <Header title="Шапка сайта" />

        {/* Основной контент: список пользователей */}
        <main>
          <Users users={this.state.users} />
          {/* Передаем список пользователей в компонент Users */}
        </main>

        {/* Боковая панель: форма для добавления пользователя */}
        <aside>
          <AddUser onAdd={this.addUser} />
          {/* Передаем функцию addUser в компонент AddUser через props */}
        </aside>
      </div>
    );
  }

  // Метод для добавления нового пользователя
  addUser(user) {
    const id = this.state.users.length + 1; // Генерация нового ID
    this.setState({
      users: [...this.state.users, { id, ...user }],
      // Добавляем нового пользователя в массив users
    });
  }
}
export default App;
```

**Объяснение работы `App`:**

- Этот компонент является основным и управляет состоянием всего приложения.
- В состоянии (`state`) хранится массив пользователей (`users`), каждый из которых имеет уникальный `id`.
- Метод `addUser` принимает объект нового пользователя из дочернего компонента `AddUser` и добавляет его в массив `users`, обновляя состояние.
- Через `props` метод `addUser` передается в компонент `AddUser`, чтобы он мог вызываться при нажатии кнопки "Добавить".

---

### **Как это работает вместе?**

1. **Пользователь заполняет форму в компоненте `AddUser`:**

   - Каждый ввод обновляет соответствующее поле в состоянии (`state`) через обработчики `onChange`.

2. **Пользователь нажимает кнопку "Добавить":**

   - Вызывается функция `onAdd`, переданная из родительского компонента `App`.
   - Эта функция передает текущие данные формы (из `state`) в метод `addUser` компонента `App`.

3. **Метод `addUser` добавляет нового пользователя:**

   - Новый пользователь добавляется в массив `users` с уникальным `id`.
   - Состояние обновляется, и React автоматически перерисовывает интерфейс.

4. **Обновленный список пользователей отображается в компоненте `Users`:**
   - Компонент `Users` получает обновленный массив `users` через `props` и отображает их.

---

### **Ключевые моменты:**

- **Управляемые компоненты:** Все поля формы в `AddUser` являются управляемыми, то есть их значения зависят от состояния (`state`). Это позволяет легко управлять данными формы.
- **Передача данных между компонентами:** Данные передаются через `props` (например, функция `onAdd` передается из `App` в `AddUser`).
- **Однонаправленный поток данных:** Данные движутся сверху вниз (от родителя к дочерним компонентам), а изменения передаются обратно через коллбэки.

Таким образом, этот код демонстрирует базовые принципы работы с формами и управлением состоянием в React.
