### **1. Знакомство с JSX в React JS**
Если бы не JSX, то описание каждого тега было бы долгим. Нужно было создать объект, добавить к нему атрибуты и возможные стили. Пример без JSX:

```javascript
// Что такое JSX? JSX расшифровывается как JavaScript XML.
// JSX — это расширение для языка JavaScript, которое позволяет описывать HTML-подобный код прямо в JavaScript файлах.
// Это делает код более читаемым и удобным для работы.

// Пример без JSX:
ReactDOM.render(
    React.createElement('input', {
         placeholder: 'Some text',
          value: 'some' 
          }), 
    document.getElementById("app")
);
// Без JSX нужно создавать объекты React вручную с помощью метода `React.createElement`.
// Этот метод принимает три аргумента: тип элемента (например, 'input'), его атрибуты (например, placeholder) и дочерние элементы.

// Такой же участок кода при помощи JSX выглядит намного проще и красивее:
ReactDOM.render(
    <input placeholder="Some text" value="some" />, 
    document.getElementById("app")
);
// JSX позволяет писать HTML-подобный код прямо в JavaScript.
// Внутри JSX можно использовать JavaScript-выражения, заключая их в фигурные скобки `{}`.
```

**Объяснение:**
- JSX — это "синтаксический сахар" для React, который упрощает написание HTML-кода внутри JavaScript.
- Без JSX код становится громоздким и сложным для чтения.
- JSX автоматически преобразуется в вызовы `React.createElement`, поэтому под капотом всё работает так же, как и без JSX.

---

### **2. Создание компонентов и их использование**

```javascript
// Создание компонентов как функции
const Header = () => {
    return (<header>Шапка сайта</header>);
};
// Функциональный компонент — это простая функция, которая возвращает JSX.
// Компоненты могут быть использованы как теги в других компонентах.

const App = () => {
    const helpText = "Random Text"; // Переменная для текста
    const inputClick = () => console.log("Clicked!"); // Обработчик клика
    const mouseOver = () => console.log("Mouse moved!"); // Обработчик наведения мыши

    return (
        <div className='Name'>
            <Header /> {/* Используем компонент Header */}
            <h1>{helpText}</h1> {/* Выводим значение переменной helpText */}
            <input
                placeholder={helpText} {/* Динамическое значение placeholder */}
                onClick={inputClick} {/* Обработчик клика */}
                onMouseEnter={mouseOver} {/* Обработчик наведения мыши */}
            />
            <p>{helpText === "net" ? "net" : "da"}</p> {/* Условный рендеринг */}
            
            {/* Вывод изображений по-разному */}
            <Image image={logo} /> {/* Использование пользовательского компонента */}
            <img src={logo} alt="Logo" /> {/* Использование стандартного тега img */}
        </div>
    );
};

// Создание компонентов как классы (чаще используется)
class App extends React.Component {
    helpText = 'Random Text'; // Свойство класса

    render() {
        return (
            <div className='Name'>
                <Header title="Шапка сайта" /> {/* Передача props в компонент */}
                <h1>{this.helpText}</h1> {/* Использование свойства класса */}
                <input
                    placeholder={this.helpText} {/* Динамическое значение placeholder */}
                    onClick={this.inputClick} {/* Обработчик клика */}
                    onMouseEnter={this.mouseOver} {/* Обработчик наведения мыши */}
                />
                <p>{this.helpText === "net" ? "net" : "da"}</p> {/* Условный рендеринг */}

                {/* Вывод изображений по-разному */}
                <Image image={logo} /> {/* Использование пользовательского компонента */}
                <img src={logo} alt="Logo" /> {/* Использование стандартного тега img */}
            </div>
        );
    }

    inputClick = () => console.log("Clicked!"); // Метод класса
    mouseOver = () => console.log("Mouse moved!"); // Метод класса
}

export default App;
```

**Объяснение:**
- Компоненты — это основные строительные блоки в React. Они могут быть функциями или классами.
- Функциональные компоненты проще и используются для статических или простых задач.
- Классовые компоненты имеют больше возможностей, таких как состояние (`state`) и жизненные циклы.
- `props` — это данные, которые передаются от родительского компонента к дочернему.
- Изображения можно выводить как через пользовательские компоненты (`<Image />`), так и через стандартный тег `<img>`.

---

### **3. Использование состояний**

```javascript
class App extends React.Component {
    constructor(props) {
        super(props);

        // Состояния
        this.state = {
            helpText: "Help Text", // Начальное значение текста
            userData: "" // Пустое значение для ввода пользователя
        };

        // Для собственных функций нужно связывать контекст (`this`), для встроенных, как render() не нужно
        this.inputClick = this.inputClick.bind(this);
    }

    render() {
        return (
            <div className='Name'>
                <Header title="Шапка сайта" />
                <h1>{this.state.helpText}</h1> {/* Вывод значения из состояния */}
                <h2>{this.state.userData}</h2> {/* Вывод введенных данных */}
                <input
                    placeholder={this.state.helpText} {/* Динамическое значение placeholder */}
                    onChange={event => this.setState({ userData: event.target.value })} {/* Обновление состояния */}
                    onClick={this.inputClick} {/* Обработчик клика */}
                    onMouseEnter={this.mouseOver} {/* Обработчик наведения мыши */}
                />
            </div>
        );
    }

    inputClick() {
        // Изменение состояния сразу при клике
        this.setState({ helpText: "Changed" }); // Обновление состояния
        console.log("Clicked!");
    }

    mouseOver = () => console.log("Mouse moved!"); // Метод класса
}
```

**Объяснение:**
- Состояние (`state`) — это объект, который хранит данные компонента.
- Метод `setState` обновляет состояние и вызывает перерисовку компонента.
- Для собственных методов нужно связывать контекст (`this`) через `bind`.

---

### **4. Использование веб-хуков**

```javascript
// Хуки начинаются с префикса `use`. Они позволяют выполнять действия автоматически.
// Например, ранее для создания состояния использовался конструктор в классе.
// В функциональных компонентах нельзя использовать конструктор, поэтому появились хуки.

// componentDidUpdate для классов
componentDidUpdate(prevProps) {
    if (this.state.helpText !== "Help") {
        console.log("Some");
    }
}

// useEffect для функций
import React, { useState, useEffect } from 'react';

function App() {
    const [click, setClick] = useState(0); // Создание состояния

    useEffect(() => {
        document.title = `Вы нажали ${click} раз`; // Побочный эффект
    });

    return (
        <button onClick={() => setClick(click + 1)}>
            Нажми меня
        </button>
    );
}
```

**Объяснение:**
- Хуки — это функции, которые позволяют использовать возможности React (например, состояние) в функциональных компонентах.
- `useState` создает состояние.
- `useEffect` выполняет побочные эффекты (например, изменение заголовка страницы).

---

### **5. Работа с массивом**

```javascript
import React from 'react';

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'I will leave from this town cause I was so sad',
            age: 30,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'Stev',
            lastname: 'Marley',
            bio: 'LOL lolo lololo',
            age: 22,
            isHappy: false
        },
    ];

    render() {
        if (this.users.length > 0) {
            return (
                <div>
                    {this.users.map((el) => (
                        <div className="user" key={el.id}>
                            <h3>{el.firstname} {el.lastname}</h3> {/* Вывод имени и фамилии */}
                            <p>{el.bio}</p> {/* Вывод биографии */}
                            <b>{el.isHappy ? 'Happy :)' : 'Sad :('}</b> {/* Условный рендеринг */}
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="user">
                    <h3>Нет пользователей</h3> {/* Сообщение, если массив пуст */}
                </div>
            );
        }
    }
}

export default Users;
```

**Объяснение:**
- Массивы часто используются для отображения списков данных.
- Метод `map` преобразует массив в список JSX-элементов.
- Каждый элемент должен иметь уникальный `key`, чтобы React мог эффективно обновлять DOM.
- Если массив пуст, можно отобразить сообщение "Нет пользователей".

---


### 6 Работа с формой, добавление элементов

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
