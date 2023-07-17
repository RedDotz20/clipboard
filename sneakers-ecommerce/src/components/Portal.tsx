import ReactDom from 'react-dom';

type PortalProps = {
	open: boolean;
	children: React.ReactNode;
	onClose: () => void;
};

const ModalPortal = ({ open, children, onClose }: PortalProps) => {
	if (!open) return null;
	return ReactDom.createPortal(
		<>
			<div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-70" />
			<div className="fixed z-50 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
				{children}
				<button
					className="absolute font-bold text-red-700 right-3 top-2"
					onClick={onClose}
				>
					X
				</button>
			</div>
		</>,
		document.getElementById('portal') as HTMLElement
	);
};

export default ModalPortal;
