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
*React-Router-Dom

## Project function

#### `Components`

### App.js

This component is in charge of rendering the page, containing the components NavBar, ItemListContainer and ItemDetailConteiner.

### NavBar.js

This component is in charge of displaying the menu with the store logo and the available menu of the products. Using the map method for rendering.
There is also the CardWidget component.

### CardWidget

Returns the shopping cart letter.

### ItemListContainer

It takes care of all the logic of the body of the page.
It contains the ItemList component and for the moment the ItemCount (this will then be taken to another component). 

### ItemDetailContainer

Receive the promise to show the articles in a certain time.
Render the ItemDetail component.

### ItemDetail

Shows all product data.

### Item

Returns the item of each article with the general description.

### ItemList

Returns all products using the map method to render in the ItemList Container.

### products.js

Contains an array of products with their categories.
Features with promises.

## Author

Rocha Maria Agustina