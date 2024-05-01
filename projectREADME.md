# Develop a React application for a musical instrument store to deepen your understanding of React's core features. This application should simulate browsing, adding, and managing musical instruments, enhancing interactivity and usability through dynamic state management and responsive interfaces.

# Application Features


## Product Browsing: 
View categories such as Guitars, Keyboards, and Drums, with details like category and name for each instrument.

## Cart Management: 
Add items to a shopping cart and view them on a dedicated cart page. Manage cart items with options to add more, remove, or adjust quantities.

## Dynamic Navigation: 
Navigate through the application using routes for home, specific instrument categories, and the shopping cart.

## User Interaction: 
Interact with the application through buttons for adding to cart, removing from cart, and toggling favorites.

## Feedback Mechanism: 
Visual and console feedback for actions such as adding or removing items.

# Technical Requirements


## State Management: 
Utilize useState for handling complex states like lists of instruments and cart interactions.

## Routing: 
Use React Router for managing navigation between different application views.

## Props and Event Handling: 
Manage and pass data effectively between components using props. Handle user interactions with comprehensive event handling.

# Component Structure:


## App Component:
Central hub for state and operations, rendering the main list and handling route setups.

## InstrumentItem Component: 
Individual instrument display with actions to manipulate cart and favorites.

## InstrumentList Component: 
Renders lists of instruments filtered by category or displaying all available items.

## JSX Utilization: 
Employ JSX for templating, ensuring dynamic rendering based on state and props.

# Project Setup


## Initial Setup: 
Start with Create React App to scaffold the project.

## Dependencies: 
Install react-router-dom for routing capabilities.

## Organization: 
Keep the project directory well-organized, with components logically structured and CSS separated for maintainability.

# Provided Data
# [ { "id": 1, "category": "Guitar", "name": "Fender Stratocaster" }, { "id": 2, "category": "Keyboard", "name": "Yamaha P-125" }, { "id": 3, "category": "Drum", "name": "DW Collector's Series" } ]

# Styling
Implement basic CSS to enhance the UI's musical theme, focusing on readability, responsiveness, and thematic consistency.

## To use react icons you need to download 
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

### Future Work
- add cart icon and add adding to cart display