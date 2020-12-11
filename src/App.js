import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
          <Nav />
          <div className="row">
            <div className="col-6">
              <AddMovie />
            </div>
            <div className="col-6">
              <MovieList />
            </div>
          </div>      
      </div>
    </MovieProvider>
  );
}

export default App;
