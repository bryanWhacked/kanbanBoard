import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import Popup from '../components/Popup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Link } from 'react-router-dom';

const modules = {
  toolbar: [
      [{ 'header': [ '1', '2', false ] }],
      [ 'bold', 'italic', 'underline' ],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [ 'link', 'image' ]
  ]
}

const formats = [
  'size',
  'bold', 'italic', 'underline',
  'list', 'bullet'
]

const onDragEnd = (result, columns, setColumns) => {
  console.log(result);
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [ removed ] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [ removed ] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


function Index() {

  useEffect(() => {
    axios
      .get('http://localhost:3003/cards')
      .then((response) => {
        setCardByUser(response.data);
        console.log(response.data);
      });

    axios
      .get('http://localhost:3003/columns/cards')
      .then((response) => {
        setColumnsFromDB(response.data);
        console.log(response.data);
      });
  }, []);

  const [ columnsFromDB, setColumnsFromDB ] = useState([]);
  
  const [ cardByUser, setCardByUser ] = useState([]);

  const [ cardPopup, setCardPopup ] = useState(false);
  const [ cardTitle, setCardTitle ] = useState("");
  const [ cardContent, setCardContent ] = useState("");
  const [ cardPlatform, setCardPlatform ] = useState("");
  const [ cardInfo, setCardInfo ] = useState({
    cardIdInfo: '',
    cardTitleInfo: '',
    cardContentInfo: ''
  });

  const [ targetColumn, setTargetColumn ] = useState("");

  const [ listPopup, setListPopup ] = useState(false);
  const [ listTitle, setListTitle ] = useState(0);

  const [ infoPopup, setInfoPopup ] = useState(false);

  const onCardContent = (value) => {
    setCardContent(value);
  }

  const addCard = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3003/cards', {
        title: cardTitle,
        content: cardContent,
        platform: cardPlatform
      })
      .then((res) => {
        if(!alert('Created card successful')) {
          window.location.reload();
        };
      });
  };

  const addList = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3003/columns', {
        columnName: listTitle
      })
      .then((res) => {
        if(!alert('Create list successful')) {
          window.location.reload();
        };
      });
  }

  const preAddCard = async (id) => {
    await setTargetColumn(id);
    setCardPopup(true);
  };

  const postAddCard = () => {
    axios
      .post('http://localhost:3003/cards/withColumn', {
        title: cardTitle,
        content: cardContent,
        platform: cardPlatform,
        column: targetColumn
      })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          alert('Create card inside column')
        }
      });
  }

  const showInfo = async (id, title, content) => {
    await setCardInfo({
      cardIdInfo: id,
      cardTitleInfo: title,
      cardContentInfo: content
    });
    setInfoPopup(true);
  }

  return (
    <div>
     <h1 style={{ marginTop: '40px',textAlign: 'center', color: '#242835', fontSize: 50, fontWeight: 800}}>content workflow</h1>
      <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columnsFromDB, setColumnsFromDB)}>
          {Object.entries(columnsFromDB).map(([id, column], index) => {
            return (
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} key={id}>
                <h2 style={{ color: '#059A9D', fontSize: 22}}>{column.columnName}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div 
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                            padding: 10,
                            width: 230,
                            minHeight: 50,
                            borderRadius: 10
                          }}
                        >
                          {column.cards.map((item, index) => {
                            return (
                              <div>
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided, snapshot) => {
                                    return (
                                      <div ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                          style={{
                                            userSelect: 'none',
                                            padding: 16,
                                            margin: '0 0 8px 0',
                                            maxHeight: '50px',
                                            backgroundColor: snapshot.isDragging ? '#263b4a' : '#456c86',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            borderRadius: '10px',
                                            ...provided.draggableProps.style
                                          }}                                      
                                        >
                                          <div onClick={() => {showInfo(item.id, item.title, item.content)}}>
                                            {item.title}
                                          </div>
                                      </div>
                                    )
                                  }}
                                </Draggable>
                              </div>
                            )
                          })}
                          {provided.placeholder}
                          <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => {preAddCard(column.id)}} >➕ Add new card</p>
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )})}
          <button onClick={() => {setListPopup(true)}} > Add new list </button>
        </DragDropContext>
      </div>

      <Popup trigger={listPopup} setTrigger={setListPopup}>
        <form onSubmit={addList}>
          <label>List Title</label>
          <input
            autoComplete='off'
            type="text"
            value={listTitle}
            onChange={(e) => {
              setListTitle(e.target.value)
            }}
          />
          <br />
          <button type="submit"> Add new list </button>
        </form>
      </Popup>

      <Popup trigger={cardPopup} setTrigger={setCardPopup}>
        <form onSubmit={postAddCard}>
          <label>Title</label>
          <input 
            autoComplete='off'
            type='text'
            value={cardTitle}
            onChange={(e) => {
              setCardTitle(e.target.value)
            }}
          />
          <br />
          <label>Content</label>
          <ReactQuill 
            theme='snow'
            modules={modules}
            formats={formats}
            placeholder={'Type something...'}
            value={cardContent}
            onChange={onCardContent}
          />
          <br />
          <label>Platform</label>
          <input 
            autoComplete='off'
            type='text'
            value={cardPlatform}
            onChange={(e) => {
              setCardPlatform(e.target.value)
            }}
          />
          <br />
          <button type="submit" > Add New Card </button>
        </form>
      </Popup>

      <Popup trigger={infoPopup} setTrigger={setInfoPopup}>
        <p>{cardInfo.cardIdInfo}</p>
        <p>{cardInfo.cardTitleInfo}</p>
        <p>{cardInfo.cardContentInfo}</p>
        <button>
          <Link to={`/cardInfo/${cardInfo.cardIdInfo}`}>
            Open in Page
          </Link>
        </button>
      </Popup>

    </div>
  );
}

export default Index;
