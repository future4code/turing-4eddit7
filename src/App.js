import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './components/1. Login Page/LoginPage'
import NewUserPage from './components/2. New User Page/NewUserPage'
import FeedPage from './components/3. Feed Page/FeedPage'
import PostPage from './components/4. Post Page/PostPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <LoginPage />
        </Route>
        <Route exact path ="/cadastro">
          <NewUserPage />
        </Route>
        <Route exact path ="/feed">
          <FeedPage />
        </Route>
        <Route exact path ="/post/:postId">
          <PostPage />
        </Route>
        <Route path ="/">
          <h1>Erro 404 - Página não encontrada 😢</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
