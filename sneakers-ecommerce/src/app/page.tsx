import AddProduct from '@/components/AddProduct';

export default function Home() {
	return (
		<main className="h-screen">
			<section className="m-10">
				<div>
					<h3 className="text-[#DA833E] font-semibold mb-1 text-xs">
						SNEAKER COMPANY
					</h3>
					<h1 className="mb-4 text-3xl font-bold">
						Fall Limited Edition Sneakers
					</h1>
					<p className="text-[#5C5B5F]">
						These low-profile sneakers are your perfect casual wear comparison.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer
					</p>

					<p className="flex items-center text-xl font-black">
						$125.00
						<span className="text-[#DA833E] font-bold bg-[#FEEFE2] ml-4 text-[0.6em] rounded-lg inline-flex px-2">
							50%
						</span>
					</p>

					<span className="text-[#5C5B5F] line-through text-xs">$250.00</span>

					<AddProduct />
				</div>
			</section>
		</main>
	);
}
