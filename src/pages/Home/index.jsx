import { Card } from "../../components/Card";

export function Home() {
    return (
        <>
        <div className='home-in-title'>
            <h1>Repositórios do GitHub</h1>
        </div>
        <div className="home-in-search">
            <input type="text" placeholder="Digite aqui o nome de usuário"/>
            <button>Pesquisar</button>
        </div>
        <div>
            <Card />
        </div>
        </>
    )
}