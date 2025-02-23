import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.png'
// Создание компонентов, как функций
// const Header = () =>{
// return(<header>Шапка сайта</header>)
// }
// const App = () => {
//     return (<div className='Name'>
//         <Header />
//         <h1>{helpText}</h1>
//         <input 
//         placeholder={helpText}
//         onClick={inputClick}
//         onMouseEnter={mouseOver}
//         />
//     <p >{helpText ==="net" ? "net": "da"}</p>
//     </div>)
// }

// Создание компонентов, как классы, чаще всего это используется

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