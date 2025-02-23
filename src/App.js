import React from 'react';
import Header from './components/Header';
import Users from './components/Users';


class App extends React.Component{  

  render(){  return (<div className='Name'>
    <Header title="Шапка сайта" />
    <main>
        <Users />
    </main>
    <aside></aside>
</div>)}

}

export default App