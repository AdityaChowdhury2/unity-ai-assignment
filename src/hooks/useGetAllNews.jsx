import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'query-string';
import { useSearchParams } from 'react-router-dom';

const useGetAllNews = () => {
	const [params] = useSearchParams();
	const { query } = qs.parse(params.toString());
	const {
		data: news,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['allNews', query],
		queryFn: async () => {
			const res = await axios.get(
				`http://hn.algolia.com/api/v1/search?query=${query}`
			);
			return res.data.hits;
		},
	});
	return { news, isLoading, isError };
};

export default useGetAllNews;
