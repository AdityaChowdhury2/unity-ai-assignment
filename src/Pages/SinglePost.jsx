import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/LoadingAnimation.json';
import AnimationContainer from '../components/AnimationContainer';
import CommentCard from '../components/CommentCard';
import { FiExternalLink } from 'react-icons/fi';
import { Parser } from 'html-to-react';
import { formatDate } from '../utils/formatDate';

const SinglePost = () => {
	const { id } = useParams();
	const { data: post, isLoading } = useQuery({
		queryKey: ['singlePost', id],
		queryFn: async () => {
			const res = await axios.get(`https://hn.algolia.com/api/v1/items/${id}`);
			return res.data;
		},
	});
	console.log(post);
	return (
		<div className=" mt-4">
			{isLoading ? (
				<AnimationContainer>
					<Lottie animationData={loadingAnimation} loop={true} />
				</AnimationContainer>
			) : (
				<div className="md:w-3/4 px-2 mx-auto">
					<div className="flex items-center justify-between">
						<div>
							{Parser().parse(post?.title) || Parser().parse(post?.text)}
						</div>
						<a className="cursor-pointer" href={post.url}>
							{post?.url && <FiExternalLink />}
						</a>
					</div>
					<p className="text-sm mb-4">
						Points: <span>{post.points}</span> | Author:{' '}
						<span>{post.author}</span> |{' '}
						<span>{formatDate(post.created_at)} year&apos;s ago</span>
					</p>
					{post.children.length ? (
						<>
							<p className="font-bold">Comments: </p>
							<div className="space-y-3">
								{post.children.map(child => {
									return <CommentCard key={child.id} comment={child} />;
								})}
							</div>
						</>
					) : (
						<AnimationContainer>
							<h4 className="text-3xl font-bold">No comments</h4>
						</AnimationContainer>
					)}
				</div>
			)}
		</div>
	);
};

export default SinglePost;
