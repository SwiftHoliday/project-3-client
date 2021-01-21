import { useState, useEffect } from 'react'
import { getNews } from './services/news-api';
import { getUser, logout } from './services/userService';

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignupPage'
// import SearchPage from './pages/SearchPage'

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import { getUserFromToken } from './services/tokenService';


function App(props) {
  const [userState, setUserState] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();
    
    setUserState({ user: null });
    
    //props.history.push('/');
  }

  const [newsArticle, setNewsArticle] = useState({
    articles: [{
      source: {
      id: null,
      name: ''
      },
    author: null,
    title: null,
    description: null,
    url: null,
    urlToImage: null,
    publishedAt: null,
    content: null
  }]});

  async function getNewsData() {
    const newsData = await getNews();
    setNewsArticle(newsData);
    console.log(newsData.articles[0])
  }

  useEffect(() => {
    getNewsData();
    console.log('effect');
  }, []);


  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    let scrollBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScroll(scroll);
    }

    window.addEventListener("scroll", scrollBarHandler);
    return () => window.removeEventListener("scroll", scrollBarHandler);
  });





  return (
    <div className="App">
      <div id="scrollBarContainer">
        <div id="scrollBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}></div>
      </div>
      

      <Header handleLogout={handleLogout} user={userState.user} />
      <main>
        <Switch>
          <Route exact path="/" render={props =>
            <HomePage />
          } />

{/* TODO: SEARCH PAGE
          <Route exact path="/search" render={props =>
            userState.user ?
              <SearchPage /> 
              :
              <Redirect to="/login" />
          } />
              */}


          <Route exact path="/dashboard" render={props =>
            userState.user ?
              <DashboardPage articles={newsArticle.articles} />
              :
              <Redirect to="/login" />
          } />
          <Route exact path="/signup" render={props =>
            <SignupPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          <Route exact path="/Login" render={props =>
            <LoginPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
