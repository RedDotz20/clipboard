export default function Home() {
	return (
		<main className="h-screen">
			<section className="m-10">
				<h3 className="text-[#DA833E] font-semibold">SNEAKER COMPANY</h3>
				<h1 className="font-bold">Fall Limited Edition Sneakers</h1>
				<p className="text-[#5C5B5F]">
					These low-profile sneakers are your perfect casual wear comparison.
					Featuring a durable rubber outer sole, they'll withstand everything
					the weather can offer
				</p>

				<p className="flex items-center">
					$125.00
					<span className="text-[#DA833E] font-bold bg-[#FEEFE2] px-1 text-[10px] rounded-sm inline-flex pl-2">
						50%
					</span>
				</p>

				<span>$250.00</span>
			</section>
		</main>
		// bg-[#FEEFE2]
	);
}
