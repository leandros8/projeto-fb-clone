import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Stories from './Stories';

import FeedForm from './FeedForm';
import FeedPost from './FeedPost';

import {db} from './firebase.js'; 

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
       db.collection('posts').onSnapshot(snapshot=>{
        console.log(546);

         setPosts(snapshot.docs.map(function(doc){
           return {info:doc.data()};
         }));
       })  


  }, [])


  return (
    <div className="App">

      <Header />
      <Stories />
      <FeedForm />
      {
        posts.map(function (val) {
          return (
            <FeedPost nome={val.info.nome} conteudo={val.info.conteudo} img={val.info.img}
              horario="20:00" />
          )
        })
      }


    </div>
  );
}

export default App;
