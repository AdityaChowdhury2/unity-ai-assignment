import PropTypes from 'prop-types';

const AnimationContainer = ({ children }) => {
	return (
		<div className={` h-[40vh] flex justify-center items-center`}>
			{children}
		</div>
	);
};

AnimationContainer.propTypes = {
	children: PropTypes.node,
};

export default AnimationContainer;
