import './App.css';
import Header from './components/header/header';
import NewsFeed from './components/newsfeed/newsfeed';
import Stats from './components/stats/stats';

function App() {
  return (
    <div className='app'>
        <div className='app__header'>
      <Header />
      </div>
      <div className='app__body'>
        <div className='app_container'>
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
