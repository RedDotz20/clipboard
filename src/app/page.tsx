import DownloadButtons from '@/components/DownloadButtons';
import Image from 'next/image';

export default function Clipboard() {
	return (
		<main className="flex flex-col items-center justify-center p-4">
			<Image
				src="/logo.svg"
				alt="Logo"
				width={50}
				height={50}
			/>
			<h1>A history of everything you copy</h1>
			<p className="text-center">
				Clipboard allows you to track and organize everything you copy.
				Instantly access your clipboard on all your devices.
			</p>
			<DownloadButtons />
			<h1>keep track of your snippets</h1>
			<p className="text-center">
				Clipboard instatly stores any item you copy in the cloud, meaning you
				can access your snippets immediately on all your devices. Our Mac and
				iOS apps will help you organize everything
			</p>
		</main>
	);
}
