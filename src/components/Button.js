import React, {useEffect, useState} from 'react';

const Button = (props) =>  {
  const [click, setClick] = useState(0)

  //срабатывает при изменении чсостояния любого в компоненте это для функций для классов componentDidUpdate
  useEffect(()=>{
    document.title =`Вы нажали ${click} раз`
  })
  return(
  <button onClick={()=>setClick(click + 1)}>{props.text} {click}</button>
)
}

Button.defaultProps ={
    text: "GGHHHH"
} 
export default Button