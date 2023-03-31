import './App.css';
import Header from './components/header.jsx';
import News from './components/news.jsx';
import Music from './components/music.jsx';
import Photos from './components/photos.jsx';
import Connect from './components/connect.jsx';


function App() {
  return (
    <div className='bg-dark-grey-bg'>
      <Header />
      <News />
      <Music />
      <Photos />
      <Connect />
    </div>
  );
}

export default App;
