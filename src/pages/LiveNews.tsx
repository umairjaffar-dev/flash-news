import { newsData } from "../utils/constant";
import NewsCard from "../components/modules/LiveNews/NewsCard";

const LiveNews = () => {
  return (
    <div className="bg-gray-200 w-full h-[calc(100vh-70px)] space-y-2 overflow-y-auto">
      {newsData.map((news) => {
        return <NewsCard key={news.id} data={news} />;
      })}
    </div>
  );
};

export default LiveNews;
