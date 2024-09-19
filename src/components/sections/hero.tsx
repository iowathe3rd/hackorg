"use client";
import React from "react";
import Carousel from "../ui/carousel";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

export default function Hero() {
	const slides = ["Hackathons", "Competitions", "Challenges"];

	return (
		<div className='h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg'>
			<div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

			<Carousel slides={slides} autoSlide={true} autoSlideInterval={5000} />

			<h1 className='md:text-4xl text-xl text-white relative z-20 mt-4'>
				HackOrg
			</h1>
			<p className='text-center mt-2 text-neutral-300 relative z-20'>
				Попробуй себя в хакатонах и соревнованиях
			</p>
		</div>
	);
}

// export const Boxes = React.memo(BoxesCore);
