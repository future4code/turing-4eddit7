import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';


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


return (
    <div>
        <h1>Post Page</h1>
        <button onClick={goToFeedPage}>Voltar para o feed</button>
        {carregando ? <div><br />Carregando...</div> : <div>
        <div>
            <p>{infosPost.username}</p>
            <p>{infosPost.text}</p>
            <p>↑ {infosPost.votesCount} ↓</p>
            <p>{infosPost.commentsCount} comentários</p>
        </div>
        <br />
        <div>
            <input placeholder="Escreva seu comentário" value={comentario} onChange={onChangeComentario} />
            <button onClick={postaComentario}>Comentar</button>
        </div>
        <br />
        {arrayComentarios.map((comentario) => {
            return <div key={comentario.id}>
            <p>{comentario.username}</p>
            <p>{comentario.text}</p>
            <p>↑ {comentario.votesCount} ↓</p>
            <br />
        </div>
        })}
        </div>}
    </div>
    )  
}

export default PostPage