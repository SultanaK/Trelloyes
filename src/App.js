import React from 'react';
import './App.css';
import List from './List'
class App extends React.Component {
  static defaultProps = {
   store: 
   {  lists:[] ,
    allCards:{}
    }
  }
  deleteCard=(cardId)=>{
    const {lists} = this.state.store
    console.log(cardId);
    for(let i =0; i<lists.length; i++){
      let list= lists[i]
      list.cardIds = list.cardIds.filter(id=> cardId !== id) 
    }
    let newState = this.state
    newState.store.lists=lists
    this.setState(newState) 
  }
  constructor(props){
    super(props)
    this.state ={store: this.props.store} 
  }
  newRandomCard=()=>{
    const id = Math.random().toString(36).substring(2,4)
              +Math.random().toString(36).substring(2,4)
        return{
          id,
          title :`Random Card ${id}`,
          content: 'New random Card'
        }
  }
  addRandomCardButton = (listId)=>{
    const newToken = newRandomCard()
    const newLists = this.state.store.lists.map(list=>{
        if(list.id === listId){
          return {
            ...list,
            cardIds:[...list.cardIds, newToken.id]
          }
        }
        return list
    })
    this.setState({
      store:{
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newToken.id]: newToken
        }
      }

    })
  }
  render(){

  return ( 
    <main className = 'App' >
      <header className = "App-header" >
        <h1> Trelloyes! </h1> 
      </header> 
      <div className = "App-list" > 
        {this.state.store.lists.map(list => (<List 
            key = {list.id}
            header = {list.header}
            cardIds = {list.cardIds}
            allCards= {this.state.store.allCards}
            onDeleteCard={this.deleteCard}
            addRandomItem={this.addRandomCardButton}
             />))}
            </div>
            </main>
          );
        }
      }
        export default App;

 


