import axios from "axios";
import { Card } from "../../components/Card";
import { useState } from 'react';

export function Home() {
    const [user, setUser] = useState('');
    const [listUser, setListUser] = useState();
    const handleSearch = async () => {
        await axios
        .get(`https://api.github.com/users/${user}`)
        .then((response) => {
            console.log(response);
            setListUser(response.data);
        })
        .catch(e=>console.log(e));
    };

    return (
        <>
        <div className='home-in-title'>
            <h1>Repositórios do GitHub</h1>
        </div>
        <div className="home-in-search">
            <input 
            type="text" 
            placeholder="Digite aqui o nome de usuário"
            onChange={(e) => setUser(e.target.value)}  
            />
            <button onClick={() =>handleSearch()}>Pesquisar</button>
        </div>
        <div>
            {listUser && 
            <Card 
            image={listUser.avatar_url} 
            username={listUser.login} 
            description={listUser.bio}
            route={`/profile/${listUser.login}`}
            />
            }
          
        </div>
        </>
    );
}