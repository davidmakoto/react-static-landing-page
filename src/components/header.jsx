import React from 'react';
import * as te from 'tw-elements';

class Header extends React.Component {
  render() {
    return (
      <div className="bg-dark-grey-bg px-100 text-center">
        <div className="flex items-center justify-center mb-6 text-5xl font-bold text-faded-lighter-grey-title"> Lea Michele </div>
        <div className="flex nav-bar px-100" >
          <div className="basis-full">
            NEWS
          </div>
          <div className="basis-full">
            MUSIC
          </div>
          <div className="basis-full">
            VIDEOS
          </div>
          <div className="basis-full">
            LIVE
          </div>
          <div className="basis-full">
            PHOTOS
          </div>
          <div className="basis-full">
            CONNECT
          </div><div className="basis-full">
            STORE
          </div>
        </div>
      </div>
    );
}
}

export default Header;