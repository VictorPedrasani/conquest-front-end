import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#0998D6',
        zIndex: 1,
        cursor: 'pointer',
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#0998D6',
        zIndex: 1,
        cursor: 'pointer',
    }

    const imagesContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const miniImageStyles = {
        marginTop: '10px',
        marginRight: '5px',
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center' 
    }

    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = slideIndex =>{
        setCurrentIndex(slideIndex)
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyles}></div>
            <div style={imagesContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        style={{...miniImageStyles, backgroundImage: `url(${slides[slideIndex].url})`}} 
                        onClick={() => goToSlide(slideIndex)}
                    >
                        &nbsp;&nbsp;
                    </div>
                ))}
            </div>
        </div >
    );
};
export default ImageSlider;