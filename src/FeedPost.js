const profile = 'https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg';
export default function(props){
    return (
        <div className="feedPosts">

<div className="feedPostSingle">
  <div className="feedPost__profile">
    <img src={profile} />
    <h3>{props.nome}<br /><span>{props.horario}</span></h3>
 
  </div>

  <div className="feedPost__content">
    <p>{props.conteudo}</p>
      <img src={props.img} />
  </div>

</div>


</div>
    );
}