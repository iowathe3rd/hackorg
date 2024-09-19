import React, {useState, useEffect} from "react";

interface CarouselProps {
	slides: string[];
	autoSlide?: boolean;
	autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
	slides,
	autoSlide = true,
	autoSlideInterval = 3000,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		if (autoSlide) {
			const slideInterval = setInterval(nextSlide, autoSlideInterval);
			return () => clearInterval(slideInterval);
		}
	}, [currentIndex, autoSlide, autoSlideInterval]);

	return (
		<div className='relative w-full h-64 overflow-hidden flex justify-center items-center'>
			<div
				className='flex transition-transform duration-700 ease-in-out'
				style={{transform: `translateX(-${currentIndex * 100}%)`}}
			>
				{slides.map((slide, index) => (
					<div key={index} className='w-full h-64 flex justify-center items-center'>
						<h1 className='text-3xl font-bold text-white'>{slide}</h1>
					</div>
				))}
			</div>

			<button
				onClick={prevSlide}
				className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none'
			>
				&#8249;
			</button>
			<button
				onClick={nextSlide}
				className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none'
			>
				&#8250;
			</button>

			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? "bg-white" : "bg-gray-400"
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
