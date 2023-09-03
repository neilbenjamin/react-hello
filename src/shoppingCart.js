//This was an amazing project to learn. Lot's of guidance from VSC, Hyperion Node Material, React and OpenAI for updated 
//Installation methods and terminal commands. This was really amazing to learn. Wow. There is a link to gitHub for this project aswell.
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Define the function component
function ShoppingCartComponent() {
  //Shopping list array
  const shoppingList = ["Apple", "Pear", "Lemon", "Melon", "Grapefruit", "Banana"];
  //React Bootstrap (BS for shorthand) accordian
  const [showList, setShowList] = useState(false);

  // Toggle the state to show/hide the list
  const toggleList = () => {
    setShowList(!showList);
  };

  // Define the JSX
  return (
    <div className="shoppingCart">
      <Card>
        <Card.Body>
          <Card.Title>Shopping Cart</Card.Title>
          <Button variant="primary" onClick={toggleList}>
            {showList ? 'Hide List' : 'Show List'}
          </Button>
          {showList && (
            <ul>
              {shoppingList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the function component
export default ShoppingCartComponent;
