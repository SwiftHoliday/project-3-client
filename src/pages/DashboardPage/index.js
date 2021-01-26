import NewsArticleCard from '../../components/NewsArticleCard/NewsArticleCard';

function DashboardPage(props) {
    return (
            <div>
                {props.hits.map((hit, idx) => (
                    <NewsArticleCard key={idx}
                        title={hit.title}
                        content={hit.content}
                        imageUrl={hit.imageUrl}
                        url={hit.url}
                        author={hit.author}>
                    </NewsArticleCard>
                ))}
            </div>
        );
    }

export default DashboardPage;