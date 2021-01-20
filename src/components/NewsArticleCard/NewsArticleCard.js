import './NewsArticleCard.css'
import Card from 'react-bootstrap/Card'


function NewsArticleCard(props) {
    return (
        <Card border="dark" className='NewsArticleCard'>
        <Card.Img style={{ width: '100%' }} variant="top" src={props.urlToImage} />
        <Card.Body className='CardBody'>
                <Card.Link className='CardLink'  href={props.url} target="_blank">{props.title}</Card.Link>
            <Card.Subtitle className='CardAuthor'>{props.author} </Card.Subtitle>
            <Card.Text>{props.content}</Card.Text>
        </Card.Body>
        </Card>
    )
}

export default NewsArticleCard