import './App.css';
import Header from './components/header.jsx';
import News from './components/news.jsx';
import Music from './components/music.jsx';



function App() {
  return (
    <div className='bg-dark-grey-bg'>
      <Header />
      <News />
      <Music />
    </div>
  );
}

export default App;
