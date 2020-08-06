import styled from 'styled-components'

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
    background-image: url("https://redditupvoted.files.wordpress.com/2018/06/hangoutsscreen_1.jpg");
    background-size: 100%;
`
export const Logo = styled.div`
    font-size: 56px;
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
`
export const DivNovoPost = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 20px 30px;
    background-image: url("https://redditupvoted.files.wordpress.com/2018/06/hangoutsscreen_1.jpg");
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
    background-image: url("https://images.wallpapersden.com/image/download/desert-vector-art_64225_4000x2250.jpg");
    padding-top: 20px;
`
export const GridPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-image: url("https://images.wallpapersden.com/image/download/desert-vector-art_64225_4000x2250.jpg");
    padding-top: 9vh;
`
export const CardPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 40vw;
    height: 120px;
    border-radius: 20px 20px 20px 0;
    background-image: linear-gradient(230deg, #df89b5 0%, #bfd9fe 100%);
    margin: 6px 5px 3px 5px;
    font-size: 13px;
    padding: 0 15px 5px 15px;
    overflow: hidden;
    opacity: 90%;
`
export const Votes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 120px;
    margin-right: 15px;
`
export const Seta = styled.span`
    font-size: 30px;
    font-family: Impact;
    font-weight: bolder;
    cursor: pointer;
    margin: 0;
`
export const NumVotos = styled.div`
    margin: 5px 0 -7px 2px;
`
export const TextoPost = styled.div`
    font-size: 25px;
    display: flex;
    width: 38vw;
    height: 60px;
    margin-top: 25px;
    overflow-y: auto;
    user-select: none;
    cursor: pointer;
`
export const AutorComments = styled.div`
    display: flex;
    width: 60%;
    margin-top: 5px;
    justify-content: space-between;
`
export const Autor = styled.span`
    font-size: 17px;
    user-select: none;
`
export const Comentarios = styled.div`
    font-size: 15px;
    margin-top: 5px;
    cursor: pointer;
`
export const Por = styled.span`
    font-size: 10px;
`


