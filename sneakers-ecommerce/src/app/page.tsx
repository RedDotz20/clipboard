import AddProduct from '@/components/AddProduct';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
	return (
		<main className="h-screen">
			<section className="flex gap-16 my-16 lg:mx-24">
				<ImageGallery />
				<div className="w-full py-12">
					<h3 className="text-[#DA833E] font-semibold mb-4 text-xs">
						SNEAKER COMPANY
					</h3>
					<h1 className="mb-4 text-5xl font-bold">
						Fall Limited Edition Sneakers
					</h1>
					<p className="text-[#5C5B5F] mb-6">
						These low-profile sneakers are your perfect casual wear comparison.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer
					</p>

					<div className="flex flex-col gap-2 mb-8">
						<p className="flex items-center text-xl font-black">
							$125.00
							<span className="text-[#DA833E] font-bold bg-[#FEEFE2] ml-4 text-[0.6em] rounded-lg inline-flex px-2">
								50%
							</span>
						</p>
						<span className="text-[#5C5B5F] line-through text-xs">$250.00</span>
					</div>

					<AddProduct />
				</div>
			</section>
		</main>
	);
}
