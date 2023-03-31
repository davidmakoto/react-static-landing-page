import React from 'react';
import FacebookIcon from '../assets/icons/facebook-icon.png';
import InstagramIcon from '../assets/icons/instagram-icon.png';
import TwitterIcon from '../assets/icons/twitter-icon.png';
import SnapchatIcon from '../assets/icons/snapchat-icon.png';

class Connect extends React.Component {
  render() {
    return (
        <div className="connect text-center text-white">
            <div className="flex justify-center py-8 text-5xl font-bold text-white">
                <h1 id="connect" className='text-white py-1 uppercase'>
                    Connect
                </h1>
            </div>



            <div className="flex justify-content px-[30%] md:px-[40%]">
                <div className="flex-1 text-center">
                    <div className="flex socials text-light-grey" >
                        <div className="basis-full scale-250 sm:scale-50 px-1">
                            <a target="_blank" href="https://www.facebook.com/leamichele">
                                <img src={FacebookIcon}
                                alt="Facebook icon leading to Lea Michele's facebook" /></a>
                        </div>
                        <div className="basis-full scale-250 sm:scale-50 px-1">
                            <a target="_blank" href="https://twitter.com/msleamichel?lang=en">
                                <img src={TwitterIcon}
                                alt="Twitter icon leading to Lea Michele's Twitter" /></a>
                        </div>
                        <div className="basis-full scale-250 sm:scale-50 px-1">
                            <a target="_blank" href="https://www.instagram.com/leamichele/?hl=en">
                                <img src={InstagramIcon}
                                alt="Instagram icon leading to Lea Michele's Instagram" /></a>
                        </div>
                        <div className="basis-full scale-250 sm:scale-50 px-1">
                            <a target="_blank" href="https://www.snapchat.com/add/msleamichele">
                                <img src={SnapchatIcon}
                                alt="Snapchat icon leading to Lea Michele's Snapchat" /></a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="contact-form flex-1 text-center ">
                    <form>
                        <label>
                            <input className='text-center p-1 my-2 px-14 border border-white placeholder-white bg-dark-grey-bg' type="text" name="name" placeholder="NAME"  />
                        </label>
                        <br></br>
                        <label>
                            <input className='text-center  p-1 my-2 px-14 border border-white placeholder-white bg-dark-grey-bg' type="text" name="name" placeholder="EMAIL ADDRESS"  />
                        </label>
                        <br></br>
                        <label>
                            <select className='text-center  py-2 my-2 px-5 border border-white placeholder-white bg-dark-grey-bg' name="country-region" id="location" placeholder="SELECT COUNTRY / REGION">
                                <option defaultValue={true} value="select-country-region">SELECT COUNTRY / REGION</option>
                                <option value="united-states">United States</option>
                                <option value="mexico">Mexico</option>
                                <option value="canada">Canada</option>
                            </select>
                        </label>
                        <br></br>
                        <label>
                            <input className='text-center p-1 my-2 px-14 border border-white placeholder-white bg-dark-grey-bg' type="numeric" name="name" placeholder="ZIP CODE"  />
                        </label>
                        <br></br>
                        <button className='text-center uppercase p-2 my-2 px-3 border border-white text-black font-semi-bold bg-light-grey' type="submit" value="Submit">Submit</button>
                    </form>
                </div>
      </div>

    );
}
}

export default Connect;