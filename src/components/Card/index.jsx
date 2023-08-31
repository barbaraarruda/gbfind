export function Card({username, description, image, route }){
    return(
        <a href={route}>
          <div className='card-in-cpn'>
            <div className='details'>
                <img src={image} alt="avatar"/>
                <div className="tx-card">
                  <p>{username}</p>
                  <p>{description}</p>
                  
                </div>
               
            </div>
            <span className="material-symbols-outlined">chevron_right</span> 
          </div>
        </a>
    );
}