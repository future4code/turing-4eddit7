import styled from 'styled-components'
import BG from '../images/bghome.jpg'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: Helvetica;
    background-image: url(${BG});
    background-size: 100vw;
`
export const Logo = styled.h1`
    color: #FE9E03;
    font-size: 145px;
    margin: -130px 0 7px 0;
    user-select: none;
`
export const Input = styled.input`
    padding-left: 3px;
    margin: 6px 0;
    border: none;
    width: 170px;
    height: 23px;
    font-size: 15px;
    outline: none;
    box-shadow: 2px 2px 2px black;
`
export const BotaoLogin = styled.button`
    border: none;
    width: 110px;
    height: 34px;
    margin: 13px 0 0 0;
    border-radius: 50px;
    font-weight: bold;
    font-size: 18px;
    color: white;
    background-color: #09D8B6;
    cursor: pointer;
    outline: none;
    box-shadow: 2px 2px 2px black;
    :hover {
        background-color: #07B89A;
    }
    :active {
        opacity: 70%;
    }
`
export const BotaoCadastro = styled.p`
    color: #FE9E03;
    font-weight: bold;
    font-size: 15px;
    margin: 5px 0 0 0;
    cursor: pointer;
    user-select: none;
    :hover {
        color: #D98602;
    }
    :active {
        opacity: 70%;
    }
`
export const Copyright = styled.p`
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    text-shadow: 2px 2px 2px black;
`