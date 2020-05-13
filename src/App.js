import React from 'react';
import './App.css';
import List from './List'
class App extends React.Component {
  static defaultProps = {
   store: {lists:[]} 
  };
  render(){

  return ( 
    <main className = 'App' >
      <header className = "App-header" >
        <h1> Trelloyes! </h1> 
      </header> 
      <div className = "App-list" > 
        {this.props.store.lists.map(list => (<List 
            key = {list.id}
            header = {list.header}
            allCards= {this.props.store.allCards}
            cardIds ={list.cardIds}
             />))}
            
            </div>

            </main>
          );
        }
      }
        export default App;

 


