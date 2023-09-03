import React from 'react';
import logo from './frikkie.png';
import Card from 'react-bootstrap/Card';
import "./user-object-style-sheet.css"
import ShoppingCartComponent from './shoppingCart.js'
import Accordion from 'react-bootstrap/Accordion';

// User Object
const userObject = {
  name: "Frikkie",
  surname: "Mayer",
  DOB: "07 February 1876",
  Address: "Sewende Laan Street, Bellville",
  email: "`frikkie@frik.co.za`",
  telephone: "0215567564",
  company: "Frikkie's Factory",
  image: logo,
};

function UserObjectComponent() {
  return (
    <div className="d-flex justify-content-center">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>CUSTOMER INFORMATION</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Img className="centered-image" variant="top" src={userObject.image} alt="logo" />
              <Card.Body>
                <Card.Text>
                  <p>Name: {userObject.name}</p>
                  <p>Surname: {userObject.surname}</p>
                  <p>DOB: {userObject.DOB}</p>
                  <p>Address: {userObject.Address}</p>
                  <p>Email: {userObject.email}</p>
                  <p>Telephone: {userObject.telephone}</p>
                  <p>Company: {userObject.company}</p>
                  <ShoppingCartComponent />
                </Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default UserObjectComponent;
