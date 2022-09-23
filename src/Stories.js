const danki_bg = 'https://cdn.pixabay.com/photo/2017/04/24/00/16/car-2255161_960_720.jpg';


export default function(){
    return (
<div className="stories">
            <div className="storiesCard" style={{backgroundImage:`url(${danki_bg})`}}>
                <p>Joao Lucas</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2014/10/22/17/22/car-498244_960_720.jpg')`}}>
                <p>Ana Cardoso</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_960_720.jpg')`}}>
                <p>Guilherme Grillo</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2014/02/26/13/57/sunrise-on-the-sea-275274_960_720.jpg')`}}>
                <p>Fernanda Brito</p>
            </div>
            <div className="storiesCard" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg')`}}>
                <p>Antonio Carlos</p>
            </div>
        </div>
    );
}


