import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";
const profile = 'https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg';

export default function(){
    return (
        <div className="feed">
            <div className="feedForm">
                <img src={profile} />
                <input type="text" placeholder="No que você está pensando?" />
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                  <AiFillVideoCamera />
                  <span>Video ao vivo</span>
                </div>
                <div className="iconSingle img">
                  <AiOutlineFileImage />
                  <span>Video ao vivo</span>
                </div>
                <div className="iconSingle emoji">
                  <AiOutlineMeh />
                  <span>Video ao vivo</span>
                </div>
            </div>



        </div>
    );
}