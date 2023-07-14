import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
import { Button } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

function Middle() {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div className='w-100'>
        <div className='row mx-auto py-md-2 container' data-aos="fade-up" data-aos-delay="300">
            <div className="col-md-6 mt-5">
                <div className='bg-dark text-light rounded p-5'>
                    <h4>I phone 14 Pro</h4>
                    <h6 className='text-light mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ratione nam repellat consequuntur totam placeat. Dolorem commodi consequatur tenetur voluptatum, consectetur ducimus reiciendis? Impedit quisquam soluta nam nisi cum animi.</h6>
                <h6 className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam voluptatibus error doloremque voluptatem omnis illo odio at unde nobis culpa repellendus voluptate officiis, cumque, repellat quisquam ex quam aliquid.</h6>
                <p className='text-light'>Hello Users</p>
                <Button className='ColorButton p-3' style={{borderRadius:'30px', color:'white', backgroundColor:'white'}}>Show More</Button>&nbsp;&nbsp;
                <ArrowBackIos/></div>
            </div>
            <div className="col-md-6 image" data-aos="fade-up" data-aos-delay="350">
                
            </div>
        </div>
        <div className='w-100 mt-5 bg-light'>
            <div className='container text-center'>
                <div className='p-5'data-aos="fade-up" data-aos-delay="350">
                    <h1>iphone 14 Pro</h1>
                    <h2>Pro. Beyond.</h2>
                    <div className='Buttons'>
                        <Button variant='contained'>Learn More</Button>&nbsp;&nbsp;
                        <Button variant='contained'>Buy</Button>
                    </div>
                </div>
                <img data-aos="fade-right" data-aos-delay="350" src="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.png?crop=1835,1375,x402,y49,safe&height=532&width=711&fit=bounds" width={'50%'} alt="" />
            </div>
        </div>

        <div className='mt-5 container'>
            <div className='row mx-autp py-md-2'>
                <div className="col-md-6 p-2">
                    <div className='bg-light rounded' data-aos="fade-up" data-aos-delay="500">
                        <div>
                            <img className='rounded-top' src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg" width={'100%'} alt="" />
                        </div>
                        <h3 className='p-3'>Apple Tunes!</h3>
                        <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis earum laboriosam, omnis natus recusandae veniam. Modi quaerat autem eveniet repudiandae distinctio excepturi, in quidem dignissimos adipisci, nihil officia ipsum.</p>
                    </div>
                </div>
                <div className="col-md-6 p-2">
                    <div className='bg-light rounded' data-aos="fade-up" data-aos-delay="550">
                        <div>
                            <img className='rounded-top' src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg" width={'100%'} alt="" />
                        </div>
                        <h3 className='p-3'>Apple Care!</h3>
                        <p className='p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequatur, accusantium quam nihil ab delectus asperiores aut facere minima! Mollitia autem necessitatibus eum dolore reiciendis, atque eaque dolorum! Commodi, repudiandae?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='collections container p-3 d-flex' data-aos="fade-up" data-aos-delay="550" >
            <div className='col-md-3 back rounded' ></div>
            <div className='col-md-9 text-light p-5'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis fugiat illo vitae debitis aut, iste eaque eos culpa, necessitatibus minus qui quisquam vero sunt rerum modi! Placeat, harum ex?</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur facilis illo illum beatae. Fugit, similique! Optio, praesentium ipsum repellendus modi sit, officiis voluptatem cumque quis enim ipsam expedita architecto.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, ullam pariatur molestias est soluta quos esse? Cum in fugiat dolorem veniam quos animi tempora quo saepe quae, esse inventore aliquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab omnis voluptates voluptatum obcaecati nihil itaque provident iure enim! Ratione, vero sint! Molestias labore quidem alias, explicabo architecto praesentium dolorem.</p>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi, eaque fugiat sequi deleniti eligendi facere autem voluptate provident, minus, nulla esse cumque quidem iste libero in cupiditate ea quasi.</h6>
                <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni id cumque maiores impedit sequi eaque, incidunt nostrum quae, beatae dolore ab architecto temporibus dicta ratione quisquam aliquam consequatur similique tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus unde, numquam neque totam reprehenderit, ab error harum possimus quidem consequuntur molestias facilis magnam consequatur, reiciendis fugiat aspernatur. Similique, id voluptas!</h6>
                <Button  className='mt-3' style={{borderRadius:'20px',backgroundColor:'white',color:'black'}} variant='contained'>App Store</Button>
            </div>
        </div>
    </div>
  )
}

export default Middle