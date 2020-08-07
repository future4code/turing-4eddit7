import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import {Pagina, Header, Logo, BotaoLogoff, BotaoNovoPost, DivNovoPost, InputNovoPost, BotaoCriaNovoPost, GridPosts, CardPost,
TextoPost, Por, AutorComments, Comentarios, Autor, Seta, Votes, LikedPost, NumVotosVermelho, ComentariosNumVotos, Carregando,
DislikedPost} from './styles'

const FeedPage = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"
    
    const [arrayPosts, setArrayPosts] = useState([])
    const [textoPost, setTextoPost] = useState("")
    const [carregando, setCarregando] = useState(true)
    const [divNovoPost, setDivNovoPost] = useState(false)
    const [curtido, setCurtido] = useState(false)

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
            mostraDivNovoPost()
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
                setCurtido(!curtido)
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

    const mostraDivNovoPost = () => {
        setDivNovoPost(!divNovoPost)
    }

    const sinalizaVoto = (voto, comentario, contagemVoto) => {
        if (voto === 1){
            return <Votes><LikedPost onClick={() => zerovote(comentario)}>↑</LikedPost><NumVotosVermelho>{contagemVoto}</NumVotosVermelho><Seta onClick={() => downvote(comentario)}>↓</Seta></Votes>
        }else if (voto === 0){
            return <Votes><Seta onClick={() => upvote(comentario)}>↑</Seta><ComentariosNumVotos>{contagemVoto}</ComentariosNumVotos><Seta onClick={() => downvote(comentario)}>↓</Seta></Votes>
        }else if (voto === -1){
            return <Votes><Seta onClick={() => upvote(comentario)}>↑</Seta><NumVotosVermelho>{contagemVoto}</NumVotosVermelho><DislikedPost onClick={() => zerovote(comentario)}>↓</DislikedPost></Votes>
        }
    }

    const zerovote = (postId) => {
        const token = window.localStorage.getItem("token")
        const body = {
            direction: 0
        }
        axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            mostraPostsFeed()
        }).catch((error) => {
            alert("Erro, por favor tente novamente")
            console.log(error.message)
        })
}

    return (
        <Pagina>
            <Header>
                <Logo><i>lab</i>eddit</Logo>
                <div>
                    <BotaoNovoPost onClick={mostraDivNovoPost}>Novo post</BotaoNovoPost>
                    <BotaoLogoff onClick={logoff}>Sair</BotaoLogoff>
                </div>
            </Header>
            {divNovoPost ? 
            <DivNovoPost>
                <InputNovoPost placeholder="Escreva seu post" value={textoPost} onChange={onChangeTextoPost} />
                <BotaoCriaNovoPost onClick={criaPost}>Postar</BotaoCriaNovoPost>
            </DivNovoPost> : <div></div>}
            {carregando ? <Carregando>Carregando...</Carregando> : 
            <GridPosts>
            {arrayPosts.map((post) => {
                return <CardPost key={post.id}>
                    {sinalizaVoto(post.userVoteDirection, post.id, post.votesCount)}
                    <TextoPost onClick={() => goToPostPage(post.id)}>{post.text}</TextoPost>
                    <AutorComments onClick={() => goToPostPage(post.id)}>
                        <Autor><Por>por </Por>{post.username}</Autor>   
                        <Comentarios> {post.commentsCount} comentários</Comentarios>
                    </AutorComments>
                </CardPost>
            })}
            </GridPosts>}
        </Pagina>
        )  
}

export default FeedPage