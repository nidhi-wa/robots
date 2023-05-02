import React from "react";

const card = (props) => {
   return(
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt ="robots" src={`https://robohash.org/${props.id}?200*200`} />
            <h2> {props.name}</h2>
            <p>{props.contact}</p>
            <p>{props.email}</p>
    </div>
   );

}
export default card;