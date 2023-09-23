import React, { useState } from 'react';
import img1 from '../../../assets/clients/img1.png';
import img2 from '../../../assets/clients/img2.png';
import img3 from '../../../assets/clients/img3.png';
import star from '../../../assets/clients/star.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../../styles/Team.css';

const Testimonials = () => {

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
        <div className="py-12 px-4">
            <div className="flex flex-col items-center justify-center pb-20 gap-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">Our <span className="text-underline">Happy Clients</span></h1>
                <p className="font-light">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide relative bg-[#E6F6FE] p-6 rounded-xl shadow-xl">
                        <div className="flex flex-row items-center justify-start gap-3">
                            <img src={img1} alt="" />
                            <div className="">
                                <h1 className="">Thomas daniel</h1>
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <p className="">
                        Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                        </p>
                    </div>
                    <div className="keen-slider__slide relative bg-[#E6F6FE] p-6 rounded-xl shadow-xl">
                        <div className="flex flex-row items-center justify-start gap-3">
                            <img src={img2} alt="" />
                            <div className="">
                                <h1 className="">Alena Alex</h1>
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <p className="">
                        Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                        </p>
                    </div>
                    <div className="keen-slider__slide relative bg-[#E6F6FE] p-6 rounded-xl shadow-xl">
                        <div className="flex flex-row items-center justify-start gap-3">
                            <img src={img3} alt="" />
                            <div className="">
                                <h1 className="">Thomas Edison</h1>
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <p className="">
                        Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.
                        </p>
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

export default Testimonials;

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