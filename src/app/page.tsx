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
			<header className="flex flex-col items-center justify-center mt-24 mb-36">
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

			<section className="flex flex-col items-center justify-center w-full mb-36">
				<h1 className="mb-4 text-3xl font-semibold">
					keep track of your snippets
				</h1>
				<p className="text-center max-w-[600px] break-words mb-16">
					Clipboard instatly stores any item you copy in the cloud, meaning you
					can access your snippets immediately on all your devices. Our Mac and
					iOS apps will help you organize everything
				</p>

				<div className="flex justify-center w-full gap-32">
					<Image
						src="/image-computer.png"
						alt="image-computer"
						width={800}
						height={600}
					/>
					<div className="my-auto">
						<h2 className="mb-4 text-2xl font-black">Quick Search</h2>
						<p className="max-w-[380px] break-words mb-14">
							Easily search your snippets by content, category, web address,
							application, and more
						</p>
						<h2 className="mb-4 text-2xl font-black">iCloud Sync</h2>
						<p className="max-w-[380px] break-words mb-14">
							Instantly saves and syncs snippets across all your devices.
						</p>
						<h2 className="mb-4 text-2xl font-black">Complete History</h2>
						<p className="max-w-[380px] break-words mb-14">
							Retrieve any snippets from the first moment you started using the
							app.
						</p>
					</div>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center w-full mb-36">
				<h1 className="mb-4 text-3xl font-semibold text-center">
					Access Clipboard anywhere
				</h1>
				<p className="text-center max-w-[600px] break-words mb-16">
					Whether you're on the go, or at your computer, you can access all your
					Clipboard snippets in a few simple clicks
				</p>

				<Image
					src="/image-devices.png"
					alt="image-devices"
					width={800}
					height={600}
				/>
			</section>
		</main>
	);
}
