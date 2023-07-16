import { createPortal } from 'react-dom';

type PortalProps = { children: React.ReactNode };

const ModalPortal = ({ children }: PortalProps) => {
	const modalRoot = document.getElementById('portal') as HTMLElement;
	return createPortal(children, modalRoot);
};

export default ModalPortal;
