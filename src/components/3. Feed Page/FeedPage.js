import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

const FeedPage = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

    const [arrayPosts, setArrayPosts] = useState([])
    const [textoPost, setTextoPost] = useState("")
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        mostraPostsFeed()
        const token = window.localStorage.getItem("token")
        if (token === null){
            history.push("/")
        }
    }, [])

    const mostraPostsFeed = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}/posts`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            setArrayPosts(response.data.posts)
            setCarregando(false)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const goToPostPage = (postId) => {
        history.push(`/post/${postId}`)
    }

    const logoff = () => {
        localStorage.clear("token")
        history.push("/")
    }

    const criaPost = () => {
        const token = window.localStorage.getItem("token")
        const body = {
            text: textoPost,
            title: "Título do post"
        }
        axios.post(`${baseUrl}/posts`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            alert("Post criado com sucesso!")
            mostraPostsFeed()
            setTextoPost("")
        }).catch((error) => {
            alert("Erro ao criar post, por favor tente novamente")
            console.log(error.message)
        })
    }

    const upvote = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 1
        }
        axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraPostsFeed()
        }).catch((error) => {
            alert("Erro ao dar upvote, por favor tente novamente")
            console.log(error.message)
        })
    }

    const downvote = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: -1
        }
        axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraPostsFeed()
        }).catch((error) => {
            alert("Erro ao dar downvote, por favor tente novamente")
            console.log(error.message)
        })
    }

    const onChangeTextoPost = event => {
        setTextoPost(event.target.value)
    }

return (
    <div>
        <h1>Feed Page</h1>
        <button onClick={logoff}>Fazer logoff</button>
        <div>
            <input placeholder="Escreva seu post" value={textoPost} onChange={onChangeTextoPost} />
            <button onClick={criaPost}>Postar</button>
        </div>
        <br />
        {carregando ? <div>Carregando...</div> : 
        <div>
        {arrayPosts.map((post) => {
            return <div key={post.id}>
            <p>{post.username}</p>
            <p onClick={() => goToPostPage(post.id)}>{post.text}</p>
            <span onClick={() => upvote(post.id)}>↑</span> {post.votesCount} <span onClick={() => downvote(post.id)}>↓</span>
            <span onClick={() => goToPostPage(post.id)}> {post.commentsCount} comentários</span>
            <hr />
        </div>
        })}
        </div>}
    </div>
    )  
}

export default FeedPage