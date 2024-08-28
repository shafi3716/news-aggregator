import './App.scss';
import AppRouter from './components/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
