import React from 'react';
import NewsPhoto from '../assets/news-photo.png';
import LateLateShowPhoto from '../assets/late-late-show-photo.png';

class News extends React.Component {
  render() {
    return (
      <div className="news text-center text-white">
        <div className="flex justify-center py-8 text-5xl font-bold text-white">
            <h1 className='text-white py-1'>
                NEWS
            </h1>
        </div>
        <div className='flex justify-center'>
          <img src={NewsPhoto} alt={"Image of Lea Michele from the shoulders up, facing sideways with her eyes closed with a slight breeze"} />
        </div>

        <div className='news-info'>
            <p className='text-light-grey text-1xl font-bold py-4'> March 22, 2017</p>
            <p className='text-white text-1xl py-4'> My first single from my new album #Places. Preorder and get this song instantly! <br></br> <a href="http://smarturl.it/PlacesLM ">http://smarturl.it/PlacesLM </a></p>
            <p class="mb-4 space-y-1 md:space-x-1 md:space-y-0">
                <button
                    class="inline-block rounded-full border-2 border-neutral-800 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                    type="button"
                    data-te-collapse-init
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    data-te-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample">
                    MORE NEWS
                </button>
                </p>
                <div
                class="!visible hidden rounded-lg shadow-lg"
                id="collapseExample"
                data-te-collapse-item>
                <div class="conditional-news block rounded-lg p-6 dark:bg-neutral-700 dark:text-neutral-50">
                    <div className='flex justify-center'>
                        <img src={LateLateShowPhoto} alt={"Image of Lea Michele sitting on a couch and looking at the camera. Besides her is her latest album on Vinyl."} />
                    </div>
                    <p className='text-light-grey text-1xl font-bold py-4'> March 22, 2017</p>
                    <p className='text-white text-1xl py-4'>

                    Rewatch my performance on the Late Late show last night here! <br></br>
                    <a href="http://LateLateShow/LeaMichele">http://LateLateShow/LeaMichele</a>
                    </p>
                </div>
                </div>
        </div>
      </div>
    );
  }
}

export default News;