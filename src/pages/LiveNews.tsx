// import { newsData } from "../utils/constant";
import { useEffect, useState } from "react";
import NewsCard from "../components/modules/LiveNews/NewsCard";
import axios from "axios";

const LiveNews = () => {
  const [newsData, setNewsData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNewData = async () => {
      try {
        const response = await axios.get(
          "https://rxq5qty48dme.share.zrok.io/get_news_posts/"
        );
        setNewsData(response.data);
        setIsLoading(false);
      } catch (error: any) {
        console.error(
          "Error fetching news posts:",
          error.response ? error.response.data : error.message
        );
      }
    };
    getNewData();
  }, []);

  if (isLoading) {
    <div>
      <p>Loading...</p>
    </div>;
  }
  if (error) {
    <div>
      <p>error: {error}</p>
    </div>;
  }
  // console.log(newsData)
  if (!newsData) return "no data";

  return (
    <div className="bg-gray-200 w-full h-[calc(100vh-70px)] space-y-2 overflow-y-auto">
      {newsData.map((news:any, ind:number) => {
        return <NewsCard key={ind} data={news} />;
      })}
    </div>
  );
};

export default LiveNews;
