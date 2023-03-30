import React from 'react';
import * as te from 'tw-elements';
import NewsPhoto from '../assets/news-photo.png';

class News extends React.Component {
  render() {
    return (
      <div className="news text-center text-white">
        <div className="flex justify-center py-1000 text-5xl font-bold text-white">
            <h1 className='text-white'>
                NEWS
            </h1>
        </div>
        
        <div className='flex justify-center'>
          <img src={NewsPhoto} />
        </div>

      </div>
    );
}
}

export default News;