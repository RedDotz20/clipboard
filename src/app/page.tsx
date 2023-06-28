import DownloadButtons from '@/components/DownloadButtons';
import Image from 'next/image';

export default function Clipboard() {
	return (
		<main className="relative flex flex-col items-center w-full h-screen">
			<div className="absolute w-full h-96 -z-10">
				<Image
					src="/bg-header-desktop.png"
					alt="Logo"
					fill={true}
				/>
			</div>
			<header className="flex flex-col items-center justify-center mt-24">
				<Image
					className="mb-12"
					src="/logo.svg"
					alt="Logo"
					width={100}
					height={100}
				/>
				<h1 className="mb-4 text-4xl font-semibold">
					A history of everything you copy
				</h1>
				<p className="text-center max-w-[600px] break-words">
					Clipboard allows you to track and organize everything you copy.
					Instantly access your clipboard on all your devices.
				</p>
				<DownloadButtons />
			</header>

			{/* <section className="flex flex-col items-center justify-center">
				<h1>keep track of your snippets</h1>
				<p className="text-center">
					Clipboard instatly stores any item you copy in the cloud, meaning you
					can access your snippets immediately on all your devices. Our Mac and
					iOS apps will help you organize everything
				</p>

				<div className="flex">
					<Image
						src="/image-computer.png"
						alt="Logo"
						width={350}
						height={250}
					/>
					<div className="ml-auto mr-10">
						<h2>Quick Search</h2>
						<p>
							Easily search your snippets by content, category, web address,
							application, and more
						</p>
						<h2>iCloud Sync</h2>
						<p>Instantly saves and syncs snippets across all your devices.</p>
						<h2>Complete History</h2>
						<p>
							Retrieve any snippets from the first moment you started using the
							app.
						</p>
					</div>
				</div>
			</section> */}
		</main>
	);
}
