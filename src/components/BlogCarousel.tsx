import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "21 Essential Gifts for the Gardening Lover",
    image: "balcony.png",
    link: "#",
  },
  {
    title: "41 Plants Perfect for a Dramatic Goth Garden",
    image: "shelf.png",
    link: "#",
  },
  {
    title: "25 Stunning Lawn Plants You Need",
    image: "terrace.png",
    link: "#",
  },
  {
    title: "10 Easy Herbs to Grow Indoors",
    image: "room.png",
    link: "#",
  },
  {
    title: "The Best Flowers for Your Balcony Garden",
    image: "cute.png",
    link: "#",
  },
  {
    title: "21 Essential Gifts for the Gardening Lover",
    image: "hanging.png",
    link: "#",
  },
  {
    title: "41 Plants Perfect for a Dramatic Goth Garden",
    image: "rack.png",
    link: "#",
  },
  {
    title: "25 Stunning Lawn Plants You Need",
    image: "decoration.png",
    link: "#",
  },
];

const BlogCarousel = () => {
  return (
    <div className="bg-green-600 p-6 rounded-lg relative">
      <h2 className="text-white text-3xl font-bold mb-4">Gardening Inspiration</h2>
      <p className="text-white mb-4">Looking for gardening inspiration? We have all the tips, tricks, and tools you need for a successful growing season this year.</p>
      
      <div className="relative mt-6">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10" id="prevBtn">
          <FaChevronLeft size={20} className="text-green-700" />
        </button>
        
        <Swiper
          navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=""
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col">
                <div className="flex items-center justify-center min-h-[200px]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="rounded"
                  />
                </div>
                <h3 className="text-green-700 font-bold text-lg text-center mt-4">
                  <a href={post.link}>{post.title}</a>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10" id="nextBtn">
          <FaChevronRight size={20} className="text-green-700" />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;