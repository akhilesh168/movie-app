import './App.css';
import Home from './components/pages/Home';
import { MovieContextProvider } from './context/moviesContext';
function App() {
  return (
    <>
      <MovieContextProvider>
        <Home />
      </MovieContextProvider>
    </>
  );
}

export default App;
