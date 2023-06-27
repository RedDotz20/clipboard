'use client';

export default function DownloadButtons() {
	return (
		<div className="flex gap-2">
			<button className="px-2 py-3 text-white rounded-full bg-hsl-171">
				Download for iOS
			</button>
			<button className="px-2 py-3 text-white rounded-full bg-hsl-233">
				Download for Mac
			</button>
		</div>
	);
}
