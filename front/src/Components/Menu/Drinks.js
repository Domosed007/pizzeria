import React, { Component } from "react";
import { Card, Button, CardColumns } from "react-bootstrap";
import { connect } from "react-redux";

class Drinks extends Component {
  render() {
    let list = [];
    this.props.items.forEach((element) => {
      if (element.category === "drink") list.push(element);
    });
    let itemList = list.map((item) => {
      return (
        <Card className="text-center" border="primary" key={item.id}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle>{item.price}</Card.Subtitle>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">В корзину</Button>
          </Card.Body>
        </Card>
      );
    });
    return <CardColumns className="m-3">{itemList}</CardColumns>;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Drinks);
