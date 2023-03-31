import React from 'react';
import * as te from 'tw-elements';
import HeaderPhoto from '../assets/header-photo.png';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className="flex justify-content 2xl:px-72 xl:px-40 lg:px-24 md:px-12 sm:px-0">
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center mb-6 text-5xl font-bold text-light-grey lg:tracking-[1em] md:tracking-[.5em] sm:tracking-[.25em] uppercase">
              Lea Michele
            </div>
            <div className="flex nav-bar text-light-grey" >
              <div className="basis-full">
                <a href="url">NEWS</a>
              </div>
              <div className="basis-full">
                <a href="url">MUSIC</a>
              </div>
              <div className="basis-full">
                <a href="url">VIDEOS</a>
              </div>
              <div className="basis-full">
                <a href="url">LIVE</a>
              </div>
              <div className="basis-full">
                <a href="url">PHOTOS</a>
              </div>
              <div className="basis-full">
                <a href="url">CONNECT</a>
              </div>
              <div className="basis-full">
                <a>STORE</a>
              </div>
            </div>
          </div>

        </div>
        <div className='flex'>
          <img className="flex-1" src={HeaderPhoto} alt={"Headshot photo of Lea Michele looking off camera, framing her head from above is the sun glistening into the camera"} />
        </div>
      </div>
    );
}
}

export default Header;