import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import {Pagina, BotaoFeed, Header, Logo, BotaoLogoff, Carregando, CardPost, ContainerPost, Votes, Seta, TituloComentarios, 
    TextoPost, AutorComments, Autor, Por, CardComentar, InputComentar, BotaoComentar, CardComentario, Liked, Disliked, 
    ComentariosVotes, ComentariosSeta, ComentariosNumVotosVermelho, ComentariosNumVotos, ComentariosTextoPost, ComentariosAutorComments,
    ComentariosPor, ComentariosAutor, LikedPost, DislikedPost, NumVotosVermelho} from './styles'

const PostPage = () => {
    const history = useHistory()

    const params = useParams()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

    const [comentario, setComentario] = useState("")
    const [infosPost, setInfosPost] = useState([])
    const [arrayComentarios, setArrayComentarios] = useState([])
    const [carregando, setCarregando] = useState(true)

    const goToFeedPage = () => {
        history.push("/feed")
    }

    useEffect(() => {
        mostraDetalhesPost()
        const token = window.localStorage.getItem("token")
        if (token === null){
            history.push("/")
        }
    }, [])

    const mostraDetalhesPost = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}/posts/${params.postId}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            setInfosPost(response.data.post)
            setArrayComentarios(response.data.post.comments)
            setCarregando(false)
            console.log(response.data.post.comments)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const postaComentario = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            text: comentario
        }
        axios.post(`${baseUrl}/posts/${params.postId}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            alert("Comentário postado com sucesso!")
            mostraDetalhesPost()
            setComentario("")
        }).catch((error) => {
            alert("Erro ao criar comentário, por favor tente novamente")
            console.log(error.message)
        })
    }

    const onChangeComentario = event => {
        setComentario(event.target.value)
    }

    const logoff = () => {
        localStorage.clear("token")
        history.push("/")
    }

    const upvotePost = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 1
        }
        axios.put(`${baseUrl}/posts/${params.postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro ao dar upvote, por favor tente novamente")
            console.log(error.message)
        })
    }

    const downvotePost = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: -1
        }
        axios.put(`${baseUrl}/posts/${params.postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro ao dar downvote, por favor tente novamente")
            console.log(error.message)
        })
    }

    const zerovotePost = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 0
        }
        axios.put(`${baseUrl}/posts/${params.postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro, por favor tente novamente")
            console.log(error.message)
        })
}

    const upvote = (commentId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 1
        }
        axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro ao dar upvote, por favor tente novamente")
            console.log(error.message)
        })
    }

    const downvote = (commentId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: -1
        }
        axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro ao dar downvote, por favor tente novamente")
            console.log(error.message)
        })
}

const zerovote = (commentId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 0
        }
        axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraDetalhesPost()
        }).catch((error) => {
            alert("Erro, por favor tente novamente")
            console.log(error.message)
        })
}

const sinalizaVotoPost = (voto, comentario, contagemVoto) => {
    if (voto === 1){
        return <Votes><LikedPost onClick={() => zerovotePost(comentario)}>↑</LikedPost><NumVotosVermelho>{contagemVoto}</NumVotosVermelho><Seta onClick={() => downvotePost(comentario)}>↓</Seta></Votes>
    }else if (voto === 0){
        return <Votes><Seta onClick={() => upvotePost(comentario)}>↑</Seta><ComentariosNumVotos>{contagemVoto}</ComentariosNumVotos><Seta onClick={() => downvotePost(comentario)}>↓</Seta></Votes>
    }else if (voto === -1){
        return <Votes><Seta onClick={() => upvotePost(comentario)}>↑</Seta><NumVotosVermelho>{contagemVoto}</NumVotosVermelho><DislikedPost onClick={() => zerovotePost(comentario)}>↓</DislikedPost></Votes>
    }
}

const sinalizaVotoComentario = (voto, comentario, contagemVoto) => {
    if (voto === 1){
        return <ComentariosVotes><Liked onClick={() => zerovote(comentario)}>↑</Liked><ComentariosNumVotosVermelho>{contagemVoto}</ComentariosNumVotosVermelho><ComentariosSeta onClick={() => downvote(comentario)}>↓</ComentariosSeta></ComentariosVotes>
    }else if (voto === 0){
        return <ComentariosVotes><ComentariosSeta onClick={() => upvote(comentario)}>↑</ComentariosSeta><ComentariosNumVotos>{contagemVoto}</ComentariosNumVotos><ComentariosSeta onClick={() => downvote(comentario)}>↓</ComentariosSeta></ComentariosVotes>
    }else if (voto === -1){
        return <ComentariosVotes><ComentariosSeta onClick={() => upvote(comentario)}>↑</ComentariosSeta><ComentariosNumVotosVermelho>{contagemVoto}</ComentariosNumVotosVermelho><Disliked onClick={() => zerovote(comentario)}>↓</Disliked></ComentariosVotes>
    }
}

return (
    <Pagina>
        <Header>
            <Logo><i>lab</i>eddit</Logo>
            <div>
                <BotaoFeed onClick={goToFeedPage}>Feed</BotaoFeed>
                <BotaoLogoff onClick={logoff}>Sair</BotaoLogoff>
            </div>
        </Header>
        {carregando ? <Carregando>Carregando...</Carregando> : 
            <ContainerPost>
                <CardPost>
                    {sinalizaVotoPost(infosPost.userVoteDirection, infosPost.id, infosPost.votesCount)}
                    <TextoPost>{infosPost.text}</TextoPost>
                    <AutorComments>
                        <Autor><Por>por </Por>{infosPost.username}</Autor>
                    </AutorComments>
                </CardPost>
                <CardComentar>
                    <InputComentar placeholder="Escreva seu comentário" value={comentario} onChange={onChangeComentario} />
                    <BotaoComentar onClick={postaComentario}>Comentar</BotaoComentar>
                </CardComentar>
                <TituloComentarios>{infosPost.commentsCount} comentários</TituloComentarios>
                {arrayComentarios.map((comentario) => {
                    return <CardComentario key={comentario.id}>
                    {sinalizaVotoComentario(comentario.userVoteDirection, comentario.id, comentario.votesCount)}
                    <ComentariosTextoPost>{comentario.text}</ComentariosTextoPost>
                    <ComentariosAutorComments><ComentariosPor>por</ComentariosPor><ComentariosAutor>{comentario.username}</ComentariosAutor></ComentariosAutorComments>
                </CardComentario>
                })}
            </ContainerPost>}
    </Pagina>
    )  
}

export default PostPage