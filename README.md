# Breaking Goals

This project is focused on a sporting goods store. It is a project in development in the course of coderhouse.


### `Installation / Execution`
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Programming languages

languages ​​used:
*Html
*Css
*Java Script
*Node Js

### Libraries used

*React Js
*React-Router-Dom (v6.1.1)
*Firebase (v9.6.1)

## Project function

#### `Components`

### App.js

This component is in charge of rendering the page, containing the components NavBar, ItemListContainer and ItemDetailConteiner.

### NavBar.js

This component is in charge of displaying the menu with the store logo and the available menu of the products. Using the map method for rendering.
There is also the CardWidget component.

### CardWidget.js

Returns the shopping cart letter.

### ItemListContainer.js

It takes care of all the logic of the body of the page.
It contains the ItemList component and for the moment the ItemCount (this will then be taken to another component). 

### ItemDetailContainer.js

Receive the promise to show the articles in a certain time.
Render the ItemDetail component.

### ItemDetail.js

Shows all product data.

### Item.js

Returns the item of each article with the general description.

### ItemList.js

Returns all products using the map method to render in the ItemList Container.

### CartItem.js

Return the product added to the cart.

### CheckOutOrder.js

Return the purchase order.

### ContactForm.js

Form to finalize purchase.

### ItemCount.js

Commands of addition, subtraction and quantity of products.

### Cart.js

Logic to obtain the data of the products by firebase. Returns the logic of the cart full and empty.

### CartContext.js

Logic of sum, subtotal, quantities, not duplicated, total of the products added to the cart.

### Firebase.js

Firebase connection to project.

## Author

Rocha Maria Agustina