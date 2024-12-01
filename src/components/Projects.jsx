import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import { slideInFromLeft } from '../animation';

import useAnimateOnScroll from '../hooks/TextScrollAnimation';

const ProjectCard =({photo,heading,video})=>{
    
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'max-content',
        height: '420px',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontSize: '2rem',
        transition: 'all 0.3s ease-in-out',
    };

    const headingStyle = {
        opacity: isHovered ? 0.80 : 0,
        width:'70%',
        transition: 'opacity 0.3s ease-in-out',
    };

    const handleCardClick = () => {
        setIsPlaying(playing=> !playing);
    };
    
    return(
        <div
            className="card-container"
            style={backgroundStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <h1 className="card-heading" style={headingStyle}>
                {heading}
            </h1>
            {isPlaying && <div className='video-popup'>
                <video src={video} controls autoPlay typeof='mp4'></video>
            </div>
            
            }
            <div>
            
            </div>
        </div>
    )
}


const Projects = () => {
   
    const textRef = useAnimateOnScroll(slideInFromLeft);
    return(
        <section id='projects'>
        <h1 className='heading' ref={textRef}>Projects</h1>
        <div className="projectsection">
            <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:4.5
            }}
            pagination={{el:'.swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
            }}
            modules={[EffectCoverflow,Pagination,Navigation]}
            >
                <SwiperSlide >
                    <ProjectCard photo={"/images/Hos.jpg"} heading={"Hospital Management"} video={"/images/Hos.mp4"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard photo={"/images/Queue.jpg"} heading={"Queuing Simulator"} video={"/images/Queue.mp4"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard photo={"/images/Todo.jpg"} heading={"Todo List"} video={"/images/Todo.mp4"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard photo={"/images/TaskManager.jpg"} heading={"Task Manager"} video={"/images/TaskManager.mp4"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard photo={"/images/Blog.jpg"} heading={"Bloging"} video={"/images/Blog.mp4"} />
                </SwiperSlide>
                <div className="slider-controller">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
        </section>
    )


    /*const [videoPopup, setVideoPopup] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const showVideo = (src) => {
        setVideoSrc(src);
        setVideoPopup(true);
    }

    const closeVideo = () => {
        setVideoPopup(false);
        setVideoSrc('');
    }

    return (
        <section id="projects">
            <h2 className="heading">Projects</h2>
            <div id="projectsection">
                <div className="project" onClick={() => showVideo('./images/a.mp4')}>
                    <img className="projectimg" src="./images/Qs.png" alt="Queuing simulator" />
                    <div className="projectdata">
                        <h3 className="projecttitle">Queuing simulator</h3>
                        <p>A queuing simulator models and analyzes systems with queues.</p>
                    </div>
                </div>

                <div className="project" onClick={() => showVideo('./images/blogweb.mp4')}>
                    <img className="projectimg" src="./images/blog.png" alt="Blog Website" />
                    <div className="projectdata">
                        <h3 className="projecttitle">Blog Website</h3>
                        <p>A platform for sharing written content and updates on various topics.</p>
                    </div>
                </div>

                <div className="project" onClick={() => showVideo('./images/HMS.mp4')}>
                    <img className="projectimg" src="./images/hos.jpg" alt="Hospital Management System" />
                    <div className="projectdata">
                        <h3 className="projecttitle">Hospital Management System</h3>
                        <p>Software that streamlines administrative tasks in hospitals.</p>
                    </div>
                </div>
            </div>

            {videoPopup && (
                <div className="video-popup" onClick={closeVideo}>
                    <div className="video-popup-content">
                        <span className="close" onClick={closeVideo}>&times;</span>
                        <video controls autoPlay>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );*/
}

export default Projects;
