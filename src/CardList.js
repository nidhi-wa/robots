import React from "react";
import Card from './Card';

const cardList= ({robots})=>{
    const cardCompnent= robots.map((users,i)=>{
        return (<Card 
           key={i} 
           id= {robots[i].id}
           name= {robots[i].name} 
           contact={robots[i].contact}
           email={robots[i].email}/>
        )
    })

    return(
      <div>
          {cardCompnent}
    </div>
    )
}
export default cardList;