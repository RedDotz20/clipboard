import { motion } from 'framer-motion';
import ReactDom from 'react-dom';
interface PortalProps {
	children: React.ReactNode;
	className: string;
}

const ModalPortal = ({ children, className }: PortalProps) => {
	return ReactDom.createPortal(
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-70"
			/>
			<motion.div
				variants={zoomInOut}
				initial="hidden"
				animate="visible"
				exit="exit"
				className={className}
			>
				{children}
			</motion.div>
		</>,
		document.getElementById('portal') as HTMLElement
	);
};

const zoomInOut = {
	hidden: {
		scale: 0.4,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
};

export default ModalPortal;
