import styled from 'styled-components'
import BGHeader from '../images/bghome.jpg'
import BG from '../images/bgpost.jpg'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica;
    overflow-y: hidden;
    background-image: url(${BG});
    min-height: 100vh;
`
export const Header = styled.div`
    width: 100vw;
    height: 7.5vh;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    align-items: center;
    background-image: url(${BGHeader});
    background-size: 100%;
`
export const Logo = styled.div`
    font-size: 55px;
    margin: 0 0 0 30px;
    font-weight: bold;
    color: white;
    user-select: none;
`
export const BotaoFeed = styled.button`
    margin: 0 30px 0 0;
    border: none;
    width: 105px;
    height: 35px;
    background-color: #07B89A;
    font-weight: bold;
    font-size: 15px;
    color: white;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #07A68B;
    }
    :active {
        opacity: 90%;
    }
`
export const BotaoLogoff = styled.button`
    margin: 0 30px 0 0;
    border: none;
    width: 70px;
    height: 30px;
    background-color: white;
    font-weight: bold;
    font-size: 14px;
    color: #FF5E00;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    :hover {
        background-color: #E3E3E3;
    }
    :active {
        opacity: 85%;
    }
`
export const Carregando = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 100px;
    color: whitesmoke;
    background-image: url(${BG});
    padding-top: 20px;
`
export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw; */
    padding: 12vh 0 4vh 0;
`
export const CardPost = styled.div`
    display: flex;
    width: 55vw;
    border-radius: 20px 20px 20px 0;
    background-image: linear-gradient(140deg, #13547a 0%, #19404C 100%);
    margin: 6px 5px 3px 5px;
    font-size: 13px;
    padding: 13px 3px 18px 0;
    overflow: hidden;
    opacity: 90%;
`
export const Votes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    font-size: 20px;
    height: 30%;
    color: white;
    margin: 0px 15px 0 10px;
`
export const Seta = styled.span`
    font-size: 30px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const NumVotos = styled.div`
    margin: 2px 0 -7px 2px;
`
export const TextoPost = styled.div`
    font-size: 25px;
    display: flex;
    width: 100vw;
    margin: 6px 0 0 0;
    overflow-y: auto;
    user-select: none;
    align-self: center;
    color: #F1F1F1;
`
export const AutorComments = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 10px 10px 0px 30px;
    align-self: center;
`
export const Por = styled.span`
    font-size: 12px;
    color: #F1F1F1;
`
export const Autor = styled.span`
    font-size: 18px;
    user-select: none;
    font-weight: bold;
    text-align: center;
    color: #6BD6FF;
`
export const Comentarios = styled.div`
    font-size: 16px;
    margin-top: 8px;
    color: #2B1A24;
    text-align: center;
    font-weight: bold;
`
export const CardComentar = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 20px 30px;
    background-image: url(${BG});
    background-size: 600%;
    background-position-y: 48%;
    border: 3px solid #5A96B0;
    width: 30vw;
    height: 100px;
    margin: 25px 20px 30px 20px;
    padding: 15px 20px 15px 20px;
    box-shadow: 2px 2px 2px #0E191B;
`
export const InputComentar = styled.textarea`
    height: 55px;
    width: 28.7vw;
    border-radius: 12px;
    border: none;
    outline: none;
    padding: 10px;
`
export const BotaoComentar = styled.button`
    width: 130px;
    height: 40px;
    align-self: center;
    margin: 15px 0 0 0;
    border: none;
    background-color: #5A96B0;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #51879E;
    }
`
export const CardComentario = styled.div`
    display: flex;
    width: 28vw;
    border-radius: 20px 20px 20px 0;
    background-image: linear-gradient(-225deg, #13547A 40%, #2580B3 100%);
    margin: 6px 5px 3px 5px;
    padding: 13px 3px 18px 0;
    overflow: hidden;
    opacity: 90%;
`
export const Liked = styled.span`
    color: #FF5E00;
    font-size: 24px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const LikedPost = styled.span`
    color: #FF5E00;
    font-size: 36px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const Disliked = styled.span`
    color: #FF5E00;
    font-size: 20px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const DislikedPost = styled.span`
    color: #FF5E00;
    font-size: 36px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const NumVotosVermelho = styled.div`
    margin: 2px 0 -7px 2px;
    color: #FF5E00;
    font-size: 20px;
`
export const ComentariosNumVotos = styled.div`
    margin: 3px 0 -6px 2px;
    font-size: 17px;
`
export const ComentariosNumVotosVermelho = styled.div`
    margin: 2px 0 -5px 2px;
    color: #FF5E00;
    font-size: 20px;
`
export const ComentariosVotes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    font-size: 20px;
    height: 30%;
    color: white;
    margin: 0px 15px 0 10px;
`
export const ComentariosSeta = styled.span`
    font-size: 20px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const ComentariosTextoPost = styled.div`
    font-size: 20px;
    display: flex;
    width: 100vw;
    margin: 6px 0 0 0;
    overflow-y: auto;
    user-select: none;
    align-self: center;
    color: #F1F1F1;
`
export const ComentariosAutorComments = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 35px 10px 0px 30px;
    align-self: center;
`
export const ComentariosPor = styled.span`
    font-size: 12px;
    color: #F1F1F1;
    margin-top: -30px;
    align-self: flex-end;
`
export const ComentariosAutor = styled.span`
    font-size: 15px;
    user-select: none;
    font-weight: bold;
    text-align: center;
    color: #6BD6FF;
    align-self: flex-end;
`
export const TituloComentarios = styled.h1`
    color: white;
    font-size: 26px;
    margin: 0 0 15px 0;
`