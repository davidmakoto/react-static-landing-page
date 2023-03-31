import React from 'react';
import p1 from '../assets/gallery/1.jpg';
import p2 from '../assets/gallery/2.jpg';
import p3 from '../assets/gallery/3.jpg';
import p4 from '../assets/gallery/4.jpg';
import p5 from '../assets/gallery/5.jpg';
import p6 from '../assets/gallery/6.jpg';
import p7 from '../assets/gallery/7.jpg';
import p8 from '../assets/gallery/8.jpg';
import p9 from '../assets/gallery/9.jpg';
import p10 from '../assets/gallery/10.jpg';
import p11 from '../assets/gallery/11.jpg';
import p12 from '../assets/gallery/12.jpg';
import p13 from '../assets/gallery/13.jpg';
import p14 from '../assets/gallery/14.jpg';
import p15 from '../assets/gallery/15.jpg';
import p16 from '../assets/gallery/16.jpg';
import p17 from '../assets/gallery/17.jpg';
import p18 from '../assets/gallery/18.jpg';
import p19 from '../assets/gallery/19.jpg';
import p20 from '../assets/gallery/20.jpg';


class Photos extends React.Component {
  render() {
    return (
      <div className="photos text-center text-white">
        <div className="flex justify-center py-8 text-5xl font-bold text-white">
            <h1 id="photos" className='text-white py-1'>
                Photos
            </h1>
        </div>
        <div className='flex justify-center'>
            <div class="container flex items-center justify-center flex-wrap mx-12 md:mx-auto">
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                        src={p1}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                        src={p2}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p3}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p4}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p5}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p6}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p7}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p8}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p9}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p10}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p11}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p12}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p13}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p14}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p15}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p16}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p17}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p18}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p19}
                        alt="image"/>
                </div>
                <div class="w-full p-2 rounded lg:w-1/5 md:w-1/2">
                    <img className='object-cover object-center h-full w-full'
                    src={p20}
                        alt="image"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Photos;