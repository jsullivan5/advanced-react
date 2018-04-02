# Advanced React

This is the accompanying code from the [Pluralsight Advanced React Tutorial](https://app.pluralsight.com/library/courses/reactjs-advanced/table-of-contents).
This course covered many advanced React.js topics such as:
  * Bootstrapping a full stack React app with Node.js
  * Testing code with Jest, Enzyme and Snapshots
  * Server side rendering
  * Using the Context API for separate state manager
  * Type checking with Prop-Types
  * Presentational components
  * Higher Order Components
  * Subscriptions
  * Performance optimization
  * Production deployment best practices

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node
```

```
git
```

```
yarn
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repo

```
git clone git@github.com:jsullivan5/advanced-react.git
```

Start Development Server

```
yarn dev
```

Build with webpack in separate terminal window
```
yarn webpack
```

## Running the tests

Tests were written to illustrate testing with Snapshots, Enzyme and Jest

```
yarn test
```

## Deployment

Start production Server

```
yarn start-prod
```

Build production node Server

```
yarn build-node
```

Build minified bundle

```
yarn build-webpack
```

## Built With

* [React](https://reactjs.org/)
