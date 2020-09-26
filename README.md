## App Overview

You can check the app live deployed on Google Cloud Platforms:
[Here](https://app-dot-posts-navigator-290609.ue.r.appspot.com)

In this app you will be able to navigate through a handfull of posts provided by the Typicode api and served by this NodeJS/React app, you will be able to edit posts, and search in the searchbox that will help you with the autocomplete,  as you type, you'll notice that the posts are gonna be filtering live!

Home:
![Home](https://storage.googleapis.com/posts-navigator-290609.appspot.com/assets/gif/app-overview.gif)

## Available Scripts

In the project directory, you can run:

### `npm run app:start`

Runs the client and server app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view the client app in the browser.

### `npm start`

Runs the client app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

The current coverage for the react app:

File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |    89.53 |    89.09 |    82.09 |    88.89 |                   |

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## API server

First you have to navigato to the server directory, run:
```cd server```

### `yarn start`

Runs the server app in the production mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn start-server-dev`

Runs the server app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `yarn test`

Launches the mocha test runner for the server unit tests.

The current coverage for the api:

![API](./src/assets/images/api-coverage.png)
