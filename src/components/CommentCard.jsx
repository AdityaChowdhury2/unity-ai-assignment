import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import './CommentCard.css';
import { MdOutlinePlayArrow } from 'react-icons/md';

const CommentCard = ({ comment }) => {
	return (
		<>
			<div className=" text-sm pl-1 md:pl-2 lg:pl-3 py-1 md:py-2 lg:py-3 md:text-lg w-full rounded-md space-y-3">
				<div className="flex gap-2">
					<div className="mt-2">
						<MdOutlinePlayArrow />
					</div>
					<div>{Parser().parse(comment?.text)}</div>
				</div>
				<div className="ml-1 md:ml-1 lg:ml-2 space-y-3">
					{comment?.children.map(child => (
						<CommentCard key={child.id} comment={child} />
					))}
				</div>
			</div>
		</>
	);
};

CommentCard.propTypes = {
	comment: PropTypes.object,
};

export default CommentCard;
