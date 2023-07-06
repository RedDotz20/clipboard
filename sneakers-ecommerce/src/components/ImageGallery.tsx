'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PreviewImageProps {
	imageUrl: string;
	onClick: (imageUrl: string) => void;
}

const PreviewImage = ({ imageUrl, onClick }: PreviewImageProps) => {
	return (
		<img
			src={imageUrl}
			alt="Preview Image"
			onClick={() => onClick(imageUrl)}
		/>
	);
};

export default function ImageGallery() {
	const [mainImage, setMainImage] = useState('main-image.jpg');

	const handleImageClick = (imageUrl: string) => {
		setMainImage(imageUrl);
	};

	return (
		<div>
			<div>
				<Image
					src={mainImage}
					alt="mainImage"
				/>
			</div>
			<div className="preview-images">
				<PreviewImage
					imageUrl="preview1.jpg"
					onClick={handleImageClick}
				/>
				<PreviewImage
					imageUrl="preview2.jpg"
					onClick={handleImageClick}
				/>
				<PreviewImage
					imageUrl="preview3.jpg"
					onClick={handleImageClick}
				/>
				{/* Add more preview images as needed */}
			</div>
		</div>
	);
}
