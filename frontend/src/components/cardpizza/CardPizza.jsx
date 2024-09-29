import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './cardpizza.css'; 

const CardPizza = ({ name, ingredients = [], price, img, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ name, ingredients, price, img });
  };

  return (
    <Card style={{ width: '25rem', border: '1px solid #ccc' }}> 
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Text>INGREDIENTES:</Card.Text>
          {ingredients.length > 0 ? (
            <ul>
              {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No hay ingredientes disponibles</p>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="price-box">PRECIO: ${price}</div> 
          <Button variant="dark" onClick={handleAddToCart}>Añadir 🛒</Button> 
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardPizza;
