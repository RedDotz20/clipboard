import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="relative flex mx-16">
			<div className="flex gap-6 align-cetner">
				<Link
					className="py-6 mr-2 text-2xl font-semibold"
					href="/"
				>
					sneakers
				</Link>
				<Link
					className="self-center py-6 mx-1"
					href="/collections"
				>
					Collections
				</Link>
				<Link
					className="self-center py-6 mx-1"
					href="/men"
				>
					Men
				</Link>
				<Link
					className="self-center py-6 mx-1"
					href="/women"
				>
					Women
				</Link>
				<Link
					className="self-center py-6 mx-1"
					href="/about"
				>
					About
				</Link>
				<Link
					className="self-center py-6 mx-1"
					href="/contact"
				>
					Contact
				</Link>
			</div>
			<div className="flex self-center gap-8 ml-auto">
				<div className="grid items-center">
					<Image
						src="/icon-cart.svg"
						alt="avatar"
						width={20}
						height={20}
					/>
				</div>
				<div>
					<Image
						src="/image-avatar.png"
						alt="avatar"
						width={40}
						height={40}
					/>
				</div>
			</div>
			<div className="h-0.5 bg-gray-400 absolute bottom-0 left-0 right-0"></div>
		</nav>
	);
}
