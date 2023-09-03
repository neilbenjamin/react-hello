//This was an amazing project to learn. Lot's of guidance from VSC, Hyperion Node Material, React and OpenAI for updated 
//Installation methods and terminal commands. This was really amazing to learn. Wow.

import React from 'react';
import logo from './frikkie.png';
import Card from 'react-bootstrap/Card';
import "./user-object-style-sheet.css"
import ShoppingCartComponent from './shoppingCart.js'
import Accordion from 'react-bootstrap/Accordion';

// User Object
const user = {
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
              <Card.Img className="centered-image" variant="top" src={user.image} alt="logo" />
              <Card.Body>
                <Card.Text>
                  <p>Name: {user.name}</p>
                  <p>Surname: {user.surname}</p>
                  <p>DOB: {user.DOB}</p>
                  <p>Address: {user.Address}</p>
                  <p>Email: {user.email}</p>
                  <p>Telephone: {user.telephone}</p>
                  <p>Company: {user.company}</p>
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
