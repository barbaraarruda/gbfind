import vaca from '../../assets/vaca.jpg';
import { Link } from 'react-router-dom';


export function Card({ username }){
    return(
        <Link to={'/profile/${username}'}> 
          <div className='card-in-cpn'>
            <div className='details'>
                <img src={vaca} alt="" />
            </div>
            <div>
                <p>username</p>
                <p>bio</p>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </Link>
    );
}