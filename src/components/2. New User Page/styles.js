import styled from 'styled-components'
import BG from '../images/bgnovousuario.jpg'

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
    color: #4940AC;
    font-size: 70px;
    margin: -50px 0 50px 0;
    user-select: none;
`
export const NovoUsuario = styled.h1`
    color: white;
    font-size: 105px;
    margin: -80px 0 10px 0;
    user-select: none;
`
export const Input = styled.input`
    padding-left: 5px;
    margin: 8px 0;
    border: none;
    width: 200px;
    height: 25px;
    font-size: 15px;
    outline: none;
`
export const BotaoCriar = styled.button`
    border: none;
    width: 125px;
    height: 35px;
    margin: 10px 0 0 0;
    border-radius: 50px;
    font-weight: bold;
    font-size: 17px;
    color: white;
    background-color: #4940AC;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 1px 2px #15374D;
    :hover {
        background-color: #E6E6E6;
    }
    :active {
        opacity: 80%;
    }
`
export const BotaoHome = styled.p`
    color: white;
    font-weight: bold;
    font-size: 17px;
    margin: 18px 0 0 0;
    cursor: pointer;
    text-shadow: 2px 2px 2px #1E3846;
`
export const Copyright = styled.p`
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
    text-shadow: 2px 2px 2px #1E3846;
`