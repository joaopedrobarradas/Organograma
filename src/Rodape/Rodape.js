import './Rodape.css'

export const Rodape = () => {
    return (
        <footer className='fundo__rodape'>
            <div className='redes__organo'>
            <img src='./imagens/fb.png' alt='Facebook Organo'></img>
            <img src='./imagens/tw.png' alt='Twitter Organo'></img>
            <img src='./imagens/ig.png' alt='Instagram Organo'></img>
            </div>
            <img src='./imagens/logo.png' alt='Facebook Organo'></img>
            <h3 className='rodape__frase'>Desenvolvido por Alura</h3>
        </footer>
    )
}