import React, { useState } from 'react';
import img1 from '../../../assets/team/img1.png';
import img2 from '../../../assets/team/img2.png';
import img3 from '../../../assets/team/img3.png';
import img4 from '../../../assets/team/img4.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../../styles/Team.css';
import { AiFillLinkedin } from 'react-icons/ai';

const Team = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        loop: true,
        mode: "free-snap",
        breakpoints: {
            '(min-width: 200px)': {
                slides: {
                    perView: 1,
                }
            },
            '(min-width: 500px)': {
                slides: {
                    perView: 2,
                    spacing: 20,
                }
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: 3,
                    spacing: 20,
                }
            },
            '(min-width: 1280px)': {
                slides: {
                    perView: 4,
                    spacing: 20,
                }
            }
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="bg-[#E6F6FE] py-12 px-4">
            <div className="flex flex-col items-center justify-center pb-20 gap-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">Meet Our <span className="text-underline">Specialists</span></h1>
                <p className="font-light">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide relative">
                        <img src={img1} alt="" />
                        <AiFillLinkedin className='absolute top-4 left-4' size={'30px'} />
                        <div className="bg-gradient-to-r from-[#83a9bc] to-[#d1dbe2] rounded-xl p-4 text-white absolute bottom-5 left-6 w-[250px]">
                            <h1 className="text-2xl font-semibold tracking-widest">Jim Carry</h1>
                            <p className="font-light">Orthodontist</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide">
                        <img src={img2} alt="" />
                        <AiFillLinkedin className='absolute top-4 left-4' size={'30px'} />
                        <div className="bg-gradient-to-r from-[#83a9bc] to-[#d1dbe2] rounded-xl p-4 text-white absolute bottom-5 left-6 w-[250px]">
                            <h1 className="text-2xl font-semibold tracking-widest">Wade Warren</h1>
                            <p className="font-light">Endodontist</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide">
                        <img src={img3} alt="" />
                        <AiFillLinkedin className='absolute top-4 left-4' size={'30px'} />
                        <div className="bg-gradient-to-r from-[#83a9bc] to-[#d1dbe2] rounded-xl p-4 text-white absolute bottom-5 left-6 w-[250px]">
                            <h1 className="text-2xl font-semibold tracking-widest">Jenny Wilson</h1>
                            <p className="font-light">Periodontist</p>
                        </div>
                    </div>
                    <div className="keen-slider__slide">
                        <img src={img4} alt="" />
                        <AiFillLinkedin className='absolute top-4 left-4' size={'30px'} />
                        <div className="bg-gradient-to-r from-[#83a9bc] to-[#d1dbe2] rounded-xl p-4 text-white absolute bottom-5 left-6 w-[250px]">
                            <h1 className="text-2xl font-semibold tracking-widest">Jacob Jones</h1>
                            <p className="font-light">Pediatric Dentist</p>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Team;

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}