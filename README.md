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