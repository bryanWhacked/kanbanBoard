import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CardInfo() {

    let { id } = useParams();

    const [ card, setCard ] = useState("");

    useEffect(() => {
      axios
        .get(`http://localhost:3003/cards/${id}`)
        .then((response) => {
          setCard(response.data);
          console.log(response.data);
        });
    },[]);

  return (
    <div>
      <p>hello world</p>
      <p>{card.title}</p>
      <p>{card.content}</p>
    </div>
  )
}

export default CardInfo