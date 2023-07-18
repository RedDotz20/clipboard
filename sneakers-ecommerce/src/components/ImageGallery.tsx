'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { imageData } from '../data/images';
import ImagePreview from './ImagePreview';
import ModalPortal from './Portal';

export default function ImageGallery() {
	const [isImagePreview, setIsImagePreview] = useState(false);
	const [mainImage, setMainImage] = useState(imageData.mainImage[0]);

	const processedThumbnail = mainImage.replace('.jpg', '-thumbnail.jpg');

	const handleImageClick = (imageUrl: string) => {
		const processedMainImg = imageUrl.replace('-thumbnail', '');
		setMainImage(processedMainImg);
	};

	return (
		<>
			<AnimatePresence
				initial={false}
				mode="wait"
				onExitComplete={() => null}
			>
				{isImagePreview && (
					<ModalPortal className="fixed z-50 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
						<button
							className="absolute font-bold text-red-700 right-3 top-2"
							onClick={() => setIsImagePreview(false)}
						>
							X
						</button>
						<ImagePreview />
					</ModalPortal>
				)}
			</AnimatePresence>

			<div className="flex flex-col items-center justify-center w-full gap-2">
				<div className="relative">
					<Image
						className="rounded-lg cursor-pointer"
						src={mainImage}
						alt="mainImage"
						height={400}
						width={400}
						onClick={() => setIsImagePreview(true)}
					/>
				</div>

				<div className="flex gap-2">
					{imageData.thumbnail.map((image: string, index) => {
						return (
							<div
								key={index}
								onClick={() => handleImageClick(image)}
								className={`rounded-xl cursor-pointer ${
									processedThumbnail === image
										? 'border-4 border-[#DA833E]'
										: 'border-4 border-[#fff]'
								}`}
							>
								<Image
									src={image}
									alt="Preview Image"
									className="rounded-lg"
									width={70}
									height={70}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
