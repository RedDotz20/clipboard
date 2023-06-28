'use client';

export default function DownloadButtons() {
	return (
		<div className="flex flex-wrap gap-3 mt-10 mb-32">
			<button className="w-56 px-2 py-3 text-white rounded-full bg-hsl-171">
				Download for iOS
			</button>
			<button className="w-56 px-2 py-3 text-white rounded-full bg-hsl-233">
				Download for Mac
			</button>
		</div>
	);
}
