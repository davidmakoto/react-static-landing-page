import React from 'react';
import PlacesAlbumSquare from '../assets/places-album-square.png';
import LouderAlbumCoverSquare from '../assets/louder-album-cover-square.png';

class Music extends React.Component {
  render() {
    return (
      <div className="news text-center text-white">
        <div className="flex justify-center py-8 text-5xl font-bold text-white">
            <h1 className='text-white py-1'>
                Music
            </h1>
        </div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col'>
                <img src={PlacesAlbumSquare} alt={"Image of Lea Michele from the shoulders up, facing sideways with her eyes closed with a slight breeze"} />
                <div className='flex justify-center py-8 text-5xl font-bold text-white'>
                <p className='text-white py-1 uppercase'>
                    <a href="url">ITUNES </a>
                    |
                    <a href="url"> spotify </a>
                    |
                    <a href="url"> amazon </a>
                    |
                    <a href="url"> target</a>
                </p>
            </div>
        </div>
          <img src={LouderAlbumCoverSquare} alt={"Image of Lea Michele from the shoulders up, facing sideways with her eyes closed with a slight breeze"} />

        </div>

        
      </div>
    );
}
}

export default Music;