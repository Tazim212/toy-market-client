/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import AnimalCard from './AnimalCard/AnimalCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Categories from '../../Pages/Categories/Categories';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../../assets/images/alibaba.png";
import img2 from "../../../assets/images/amazon.jpg";
import img3 from "../../../assets/images/daraz.png";
import img4 from "../../../assets/images/priyoshop.jpg"
import Reviews from './Reviews/Reviews';


const Home = () => {

    const [toys, setToys] = useState([])
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch('https://toy-server-blue.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div>
            <div className='mt-5 mx-12'>
                <Carousel></Carousel>
            </div>

            <h1 data-aos="fade-right" className='text-center text-5xl mt-10 font-bold'>Animal Collection</h1>
            <div data-aos="fade-left" className='grid grid-cols-2 md:grid-cols-4 gap-3 mx-16 my-12 bg-zinc-600 rounded-lg shadow-2xl'>
                {
                    img.map(item => <AnimalCard key={item.id} item={item}></AnimalCard>)
                }
            </div>
            <h1 data-aos="fade-right" className='text-center text-5xl mt-10 font-bold'>Shop By Category</h1>
            <div data-aos="flip-up" className='mx-16'>
                <Tabs>
                    <TabList>
                        <Tab>Tiger Category</Tab>
                        <Tab>Zebra Category</Tab>
                        <Tab>Ziraf Category</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            {
                                toys.slice(0, 2).map(toy => <Categories key={toy._id} toy={toy}></Categories>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-col md:flex-row'>
                            {
                                toys.slice(0,2).map(toy => <Categories key={toy._id} toy={toy}></Categories>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-col md:flex-row'>
                            {
                                toys.slice(0,2).map(toy => <Categories key={toy._id} toy={toy}></Categories>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>


                <h1 data-aos="fade-right" className='text-center text-5xl my-10 font-bold'>Customer Reviews</h1>
                <Reviews></Reviews>

                <h1 data-aos="fade-right" className='text-center text-5xl my-10 font-bold'>Our Partners</h1>
 
                 <div data-aos="fade-left" className="avatar py-4 ps-16 bg-emerald-200 rounded-lg mb-9 mx-16 grid grid-cols-1 md:grid-cols-4 gap-5 shadow-xl">
                        <div className="w-36 h-28 rounded-md shadow-lg">
                            <img src={img1} />
                        </div>
                        <div className="w-36 h-28 rounded-md shadow-lg">
                            <img src={img2} />
                        </div>
                        <div className="w-36 h-28 rounded-md shadow-lg">
                            <img src={img3} />
                        </div>
                        <div className="w-36 h-28 rounded-md shadow-lg">
                            <img src={img4} />
                        </div>
                 </div>

            </div>
        </div>
    );
};

export default Home;