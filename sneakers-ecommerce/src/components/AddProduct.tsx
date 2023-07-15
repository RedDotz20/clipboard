'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function AddProduct() {
	const [quantity, setQuantity] = useState(0);

	const increaseQuantity = () => {
		if (quantity < 10) setQuantity((prev) => prev + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 0) setQuantity((prev) => prev - 1);
	};

	return (
		<div className="flex gap-4">
			<div className="bg-[#F7F8FD] flex gap-2 items-center">
				<button
					className="h-full px-5 cursor-pointer"
					onClick={decreaseQuantity}
				>
					<Image
						src="icon-minus.svg"
						alt="cart"
						width={10}
						height={10}
					/>
				</button>
				<p className="w-10 px-2 text-center">{quantity}</p>
				<button
					className="h-full px-5 cursor-pointer"
					onClick={increaseQuantity}
				>
					<Image
						src="icon-plus.svg"
						alt="cart"
						width={10}
						height={10}
					/>
				</button>
			</div>
			<button className="bg-[#FF7D1B] text-white py-4 px-20 rounded-md text-[1rem] font-semibold flex gap-4">
				<Image
					src="icon-cart.svg"
					alt="cart"
					width={22}
					height={20}
				/>
				Add to cart
			</button>
		</div>
	);
}
