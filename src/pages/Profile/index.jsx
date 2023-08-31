import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Profile() {
    const { user } = useParams();
    const [listUser, setListUser] = useState({});
    const [ repos, setRepos ] = useState([]);
    useEffect(() =>{
        const data = async () => {
            await axios
            .get(`https://api.github.com/users/${user}`)
            .then(async(response) => {
                console.log(response);
                setListUser(response.data);

                await axios
                .get(`https://api.github.com/users/${user}/repos`)
                .then((res) => {
                    console.log(res);
                    setRepos(res.data);
                })
                .catch((e) => console.log(e));
            })
            .catch(e=>console.log(e));
        };
        data();
    }, []);
    return (
        <>
          <div className='profile-details'>
            <img src={listUser.avatar_url} alt='' />
            <div className='pf-init-user'>
                <div className='dt-user'>
                    <div className='followers_details'>
                        <p>{listUser.public_repos}</p>
                        <p>Repositórios</p>
                    </div>
                    <div className='followers_details'>
                        <p>{listUser.followers}</p>
                        <p>Seguidores</p>
                    </div>
                    <div className='followers_details'>
                        <p>{listUser.following}</p>
                        <p>Seguindo</p>
                    </div>
                </div>
                <div className='username_details'>
                    <h3>{listUser.name}</h3>
                    <p>{listUser.bio}</p>
                </div>
            </div>
          </div>
          <div>
            {repos && repos.map(repo => {
                console.log(repo);
                return (
                    <>
                        <Card 
                        username={repo.full_name} 
                        description={repo.description} 
                        image={listUser.avatar_url}
                        route={repo.html_url} 
                        />
                    </>
                );
               
            })}
            
          </div>
        </>
    
    );
}