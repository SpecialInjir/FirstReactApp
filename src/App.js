import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.png'



class App extends React.Component{  
    constructor(props){
        super(props)
        this.state ={
            helpText: "Help Text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

    componentDidUpdate(prevProp){
        if(this.state.helpText !== "Help"){
            console.log("Some")
        }
    }

  render(){  return (<div className='Name'>
    <Header title="Шапка сайта" />
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input 
    placeholder={this.state.helpText}
    onChange ={event => this.setState({userData: event.target.value})}
    onClick={this.inputClick}
    onMouseEnter={this.mouseOver}
    />
<p >{this.state.helpText ==="net" ? "net": "da"}</p>
//вывод изображений по разному
<Image image={logo}/>
<img src={logo}></img>
</div>)}

 inputClick() {
    this.setState({helpText: "Changed"})
    console.log("Clicked!")
}
 mouseOver = () => console.log("Mouse moved!")
}

export default App