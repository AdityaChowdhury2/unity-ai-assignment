import useGetAllNews from '../hooks/useGetAllNews';

const AllNews = () => {
	const { news, isLoading, isError } = useGetAllNews();
	console.log(news);

	return <div className="container"></div>;
};

export default AllNews;
