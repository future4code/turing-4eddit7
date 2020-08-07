import styled from 'styled-components'
import BGFeed from '../images/bgfeed.jpg'
import BGHeader from '../images/bghome.jpg'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica;
    overflow-y: hidden;
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
export const BotaoNovoPost = styled.button`
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
    color: #FE9E03;
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
export const DivNovoPost = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 20px 30px;
    background-image: url(${BGHeader});
    background-size: 300%;
    background-position-x: 20%;
    border: 3px solid #FE9E03;
    width: 300px;
    height: 100px;
    margin: 40px 20px 20px 20px;
    padding: 15px 20px 20px 20px;
    box-shadow: 2px 2px 2px #C47A02;
    position: absolute;
    top: 15px;
    right: 185px;
    z-index: 1;
`
export const InputNovoPost = styled.textarea`
    height: 50px;
    border-radius: 20px 20px 20px 20px;
    border: none;
    outline: none;
    padding: 10px;
`
export const BotaoCriaNovoPost = styled.button`
    width: 130px;
    height: 30px;
    align-self: center;
    margin: 10px 0 -40px 0;
    border: none;
    background-color: #FE9E03;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;
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
    background-image: url(${BGFeed});
    padding-top: 20px;
`
export const GridPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-image: url(${BGFeed});
    padding: 9vh 0 4vh 0;
`
export const CardPost = styled.div`
    display: flex;
    width: 50vw;
    height: 100%;
    border-radius: 20px 20px 20px 0;
    background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
    margin: 6px 5px 3px 5px;
    font-size: 13px;
    padding: 10px 0 15px 0;
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
    margin: 0px 15px 0 10px;
`
export const Seta = styled.span`
    font-size: 32px;
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
    color: #2B1A24;
    cursor: pointer;
`
export const AutorComments = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 10px 10px 0px 30px;
    align-self: center;
    cursor: pointer;
`
export const Por = styled.span`
    font-size: 12px;
    color: #2B1A24;
`
export const Autor = styled.span`
    font-size: 18px;
    user-select: none;
    font-weight: bold;
    text-align: center;
    color: #AA2D57;
`
export const Comentarios = styled.div`
    font-size: 16px;
    margin-top: 8px;
    color: #2B1A24;
    text-align: center;
    font-weight: bold;
`
export const LikedPost = styled.span`
    color: #FF5E00;
    font-size: 32px;
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
    font-size: 20px;
`
export const DislikedPost = styled.span`
    color: #FF5E00;
    font-size: 32px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`