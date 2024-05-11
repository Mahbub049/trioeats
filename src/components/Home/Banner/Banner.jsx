import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='mt-8 mx-1'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <img src="" alt="" />
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/banner1.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                    <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[70px]'>Explore Global Flavors Today!</h1>
                    <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Embark on a culinary journey with our diverse range of international dishes, curated to tantalize your taste buds and ignite your senses.</p>
                    <Link to={'/allitems'}>
                        <button className='btn lg:text-md bg-[#A75D5D] border-0 text-white'>Explore All Foods</button>
                    </Link>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/banner2.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                        <h1 className='text-white font-bold text-2xl lg:text-6xl md:text-4xl lg:leading-[70px]'>Indulge in Local <br /> Delicacies Here! </h1>
                        <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Savor the essence of our region with locally sourced ingredients and traditional recipes, crafted with passion and authenticity for a memorable dining experience.</p>
                        <Link to={'/allitems'}>
                            <button className='btn lg:text-md bg-[#A75D5D] border-0 text-white'>Explore All Foods</button>
                        </Link>
                    </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/banner3.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                        <h1 className='text-white font-bold text-2xl lg:text-6xl md:text-4xl lg:leading-[70px]'>Discover Chef&apos;s Special Creations!</h1>
                        <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Delight in our chef&apos;s innovative masterpieces, expertly crafted with premium ingredients and artistic flair, to elevate your dining adventure to new heights of gastronomic bliss.</p>
                        <Link to={'/allitems'}>
                            <button className='btn lg:text-md bg-[#A75D5D] border-0 text-white'>Explore All Foods</button>
                        </Link>
                    </div>
            </div>
            </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default Banner;