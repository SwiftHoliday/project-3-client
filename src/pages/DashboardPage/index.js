import NewsArticleCard from '../../components/NewsArticleCard/NewsArticleCard'



function DashboardPage(props) {
    return (
        <div>
            {props.articles.map((article, idx) => (
                <NewsArticleCard key={idx}
                    title={article.title}
                    content={article.content}
                    urlToImage={article.urlToImage}
                    url={article.url}
                    author={article.author}>
                    </NewsArticleCard>
            ))}
        </div>
    );
}

export default DashboardPage