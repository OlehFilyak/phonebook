import { Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import HomePage from './pages/HomePage';

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

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/" exact>
            <HomePage />
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
