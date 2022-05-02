import React from "react";
import { Card } from "react-bootstrap";
import './ProductCard.css'
import { Button } from '../shared/Button/Button'

function ProductCard({ producto }) {
  return (
    <div className="cardContainer">
      <Card>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/dd/c4/94/ddc49442308232d4bff993c310ff4ada.png"
        />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            Here goes a short product description
          </Card.Text>
          <Button>Ver detalles</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export { ProductCard };
