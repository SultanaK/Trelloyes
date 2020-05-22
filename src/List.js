import React from 'react';
import Card from './Card'
function List(props) {

    return(
        <section className = "List">
            <header className = "List-header">
                <h2> {props.header} </h2> 
            </header>
            <div className="List-Cards">
                {props.cardIds.map(
                   id=> {
                       let card = props.allCards[id]
                        return <Card 
                            id={card.id} 
                            key ={card.id}
                            title ={card.title}
                            content = {card.content}
                            deleteCard={props.onDeleteCard} />
                   } 
                )}
                <button onClick={()=>props.addRandomItem(props.id)} type = "button" className = "List-add-button" >
                        +Add Random Card 
                </button>
            </div>       
        </section>
    )
    
}
export default List;
