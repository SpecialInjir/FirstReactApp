### 1  Знакомство с JSX в React JS


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