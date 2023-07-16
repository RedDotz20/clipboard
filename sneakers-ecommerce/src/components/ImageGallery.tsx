'use client';

import Image from 'next/image';
import { useState } from 'react';
import { imageData } from '../data/images';

type PreviewImageProps = {
	imageUrl: string;
	className?: string;
	style?: React.CSSProperties;
	onClick: () => void;
};

const PreviewImage = ({ imageUrl, className, ...rest }: PreviewImageProps) => {
	return (
		<div
			className={className}
			{...rest}
		>
			<Image
				src={imageUrl}
				alt="Preview Image"
				className="rounded-lg"
				width={70}
				height={70}
			/>
		</div>
	);
};

export default function ImageGallery() {
	const [mainImage, setMainImage] = useState(imageData.mainImage[0]);
	const processedThumbnail = mainImage.replace('.jpg', '-thumbnail.jpg');

	const handleImageClick = (imageUrl: string) => {
		const processedMainImg = imageUrl.replace('-thumbnail', '');
		setMainImage(processedMainImg);
	};

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

			<div className="flex gap-2">
				{imageData.thumbnail.map((image: string, index) => {
					return (
						<PreviewImage
							imageUrl={image}
							key={index}
							className={`rounded-xl p-1 cursor-pointer ${
								processedThumbnail === image
									? 'border-4 p-0 border-[#DA833E]'
									: ''
							}`}
							// style={{ margin: '0.5rem' }}
							onClick={() => handleImageClick(image)}
						/>
					);
				})}
			</div>
		</div>
	);
}
