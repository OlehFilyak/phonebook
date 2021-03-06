import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>

          <Route path="/login" exact>
            <LogInPage />
          </Route>

          <Route path="/signup" exact>
            <SignUpPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;

// <Switch>
//   <Route path="/" exact>
//     <HomeView />
//   </Route>

//   <Route path="/movies" exact>
//     <MoviesView />
//   </Route>

//   <Route path="/movies/:movieId">
//     <MovieCardView />
//   </Route>

//   <Route>
//     <NotFoundPage />
//   </Route>
// </Switch>;
