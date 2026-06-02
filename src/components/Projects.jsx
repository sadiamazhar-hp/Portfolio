import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import { slideInFromLeft } from '../animation';
import useAnimateOnScroll from '../hooks/TextScrollAnimation';

const projects = [
    { id: 'au-erp', photo: '/images/image.jpg', heading: 'AU ERP', video: '/images/AU_ERP_Proj.mp4' },
    { id: 'hospital', photo: '/images/Hos.jpg', heading: 'Hospital Management', video: '/images/Hos.mp4' },
    { id: 'queue', photo: '/images/Queue.jpg', heading: 'Queuing Simulator', video: '/images/Queue.mp4' },
    { id: 'todo', photo: '/images/Todo.jpg', heading: 'Todo List', video: '/images/Todo.mp4' },
    { id: 'task-manager', photo: '/images/TaskManager.jpg', heading: 'Task Manager', video: '/images/TaskManager.mp4' },
    { id: 'blog', photo: '/images/Blog.jpg', heading: 'Bloging', video: '/images/Blog.mp4' },
];

const VideoModal = ({ project, onClose }) => {
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    useEffect(() => {
        setIsLoading(true);
    }, [project.video]);

    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);

    return (
        <div className="video-popup-overlay video-modal-enter" onClick={onClose}>
            <div
                className="video-popup video-modal-panel"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="video-modal-title"
            >
                <div className="video-modal-header">
                    <div className="video-modal-header-text">
                        <h2 id="video-modal-title">{project.heading}</h2>
                        <p className="video-modal-subtitle">Project demo</p>
                    </div>
                    <button
                        type="button"
                        className="close"
                        onClick={onClose}
                        aria-label="Close video"
                    >
                        &times;
                    </button>
                </div>
                <div className="video-player-wrapper">
                    {isLoading && (
                        <div className="video-loading" aria-live="polite">
                            <div className="video-loading-spinner" />
                            <span>Loading video...</span>
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        key={project.video}
                        src={project.video}
                        controls
                        autoPlay
                        preload="metadata"
                        onLoadStart={() => setIsLoading(true)}
                        onWaiting={handleWaiting}
                        onCanPlay={handleCanPlay}
                        onPlaying={handleCanPlay}
                    >
                        <track kind="captions" />
                    </video>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onPlay }) => {
    const [isHovered, setIsHovered] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${project.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const handleCardClick = (event) => {
        event.stopPropagation();
        onPlay(project);
    };

    return (
        <div
            className="card-container"
            style={backgroundStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onPlay(project);
                }
            }}
            aria-label={`Watch demo for ${project.heading}`}
        >
            <div className={`card-play-overlay ${isHovered ? 'visible' : ''}`}>
                <span className="card-play-icon">&#9654;</span>
                <span className="card-play-label">Watch Demo</span>
            </div>
            <h1 className={`card-heading ${isHovered ? 'visible' : ''}`}>
                {project.heading}
            </h1>
        </div>
    );
};

const Projects = () => {
    const textRef = useAnimateOnScroll(slideInFromLeft);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section id='projects'>
            <h1 className='heading' ref={textRef}>Projects</h1>
            <div className="projectsection">
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 4.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard
                                project={project}
                                onPlay={setActiveProject}
                            />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controller">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
            {activeProject && (
                <VideoModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
