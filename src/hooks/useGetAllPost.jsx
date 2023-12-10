import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'query-string';
import { useSearchParams } from 'react-router-dom';

const useGetAllPost = () => {
	const [params] = useSearchParams();
	const { query } = qs.parse(params.toString());
	const { data: posts, isLoading } = useQuery({
		queryKey: ['allPost', query],
		queryFn: async () => {
			const res = await axios.get(
				`https://hn.algolia.com/api/v1/search?query=${query}`
			);
			return res.data.hits;
		},
	});
	return { posts, isLoading };
};

export default useGetAllPost;
