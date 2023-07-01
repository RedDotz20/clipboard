import Link from 'next/link';

export default function Navbar() {
	return (
		<div>
			<Link href="/">sneakers</Link>
			<Link href="/collections">Collections</Link>
			<Link href="/men">Men</Link>
			<Link href="/women">Women</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
		</div>
	);
}
