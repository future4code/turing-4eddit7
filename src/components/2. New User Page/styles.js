import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: Helvetica;
    background-image: url("https://get.wallhere.com/photo/digital-art-artwork-fantasy-art-planet-Sun-sunlight-nature-forest-trees-mountains-landscape-sky-skyscape-comet-clouds-minimalism-Flatdesign-vector-art-illustration-vector-1793295.jpg");
    background-size: 100vw;
`
export const Logo = styled.h1`
    color: white;
    font-size: 105px;
    margin: -90px 0 10px 0;
    user-select: none;
`
export const Input = styled.input`
    padding-left: 3px;
    margin: 8px 0;
    border: none;
    width: 200px;
    height: 25px;
    font-size: 15px;
    outline: none;
    /* box-shadow: 2px 2px 2px #15374D; */
`
export const BotaoCriar = styled.button`
    border: none;
    width: 125px;
    height: 35px;
    margin: 10px 0 0 0;
    border-radius: 50px;
    font-weight: bold;
    font-size: 16px;
    color: #1E756D;
    background-color: white;
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