'use client';

import Image from 'next/image';
import { useState } from 'react';
import { imageData } from '../data/images';

type PreviewImageProps = { imageUrl: string };

const PreviewImage = ({ imageUrl, ...rest }: PreviewImageProps) => {
	return (
		<Image
			src={imageUrl}
			alt="Preview Image"
			className="rounded-lg"
			width={70}
			height={70}
			{...rest}
		/>
	);
};

export default function ImageGallery() {
	const [mainImage, setMainImage] = useState(imageData.mainImage[0]);
	const handleImageClick = (imageUrl: string) => setMainImage(imageUrl);

	return (
		<div className="flex flex-col items-center justify-center w-full gap-2">
			<div className="relative">
				<Image
					className="rounded-lg"
					src={mainImage}
					alt="mainImage"
					height={400}
					width={400}
				/>
			</div>

			<div className="flex gap-2 ">
				{imageData.thumbnail.map((image: string, index) => {
					return (
						<PreviewImage
							imageUrl={image}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
