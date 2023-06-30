'use client';

export default function DownloadButtons() {
	return (
		<div className="flex flex-wrap justify-center gap-3 mt-10">
			<button className="w-56 px-2 py-3 font-bold text-white rounded-full bg-hsl-171">
				Download for iOS
			</button>
			<button className="w-56 px-2 py-3 font-bold text-white rounded-full bg-hsl-233">
				Download for Mac
			</button>
		</div>
	);
}
