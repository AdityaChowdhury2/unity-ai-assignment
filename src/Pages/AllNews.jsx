import useGetAllNews from '../hooks/useGetAllNews';
import loadingAnimation from '../assets/LoadingAnimation.json';
import errorAnimation from '../assets/ErrorAnimation.json';
import notFoundAnimation from '../assets/NotFoundAnimation.json';
import Lottie from 'lottie-react';
import AnimationContainer from '../components/AnimationContainer';
import { FiExternalLink } from 'react-icons/fi';

const AllNews = () => {
	const { news, isLoading, isError } = useGetAllNews();
	// console.log(news);

	return (
		<div className="container">
			{isLoading ? (
				<AnimationContainer type={'loading'}>
					<Lottie animationData={loadingAnimation} loop={true} />
				</AnimationContainer>
			) : news?.length ? (
				<div>
					<div className="flex items-center gap-4">
						<h4>Stephen Hawking has died</h4>
						<div>
							<FiExternalLink />
						</div>
					</div>
					<div className="flex">
						<p>6015 points</p>
						<p>Author</p>
						<p>Author</p>
						<p>Author</p>
					</div>
				</div>
			) : isError ? (
				<AnimationContainer type={'error'}>
					<Lottie animationData={errorAnimation} loop={false} />
				</AnimationContainer>
			) : (
				<AnimationContainer type={'notFound'}>
					<Lottie animationData={notFoundAnimation} loop={false} />
				</AnimationContainer>
			)}
		</div>
	);
};

export default AllNews;
