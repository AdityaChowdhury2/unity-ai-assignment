import PropTypes from 'prop-types';

const AnimationContainer = ({ children, type }) => {
	return (
		<div
			className={`${
				type === 'notFound' ? 'h-[60vh]' : 'h-[40vh]'
			} flex  justify-center items-center`}
		>
			{children}
		</div>
	);
};

AnimationContainer.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string.isRequired,
};

export default AnimationContainer;
