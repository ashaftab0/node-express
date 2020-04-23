# node-express README

A basic family tree application that uses a [NodeJS], an api written in [ExpressJS].

## Features

* Add a member
* Remove a member
* List all member

## Developed With

* [NodeJS] - Javascript runtime
* [ExpressJS] - A web application framework for Node.js

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* NodeJS

  Type the following commands in the terminal to verify your node and npm versions
  ```bash
  node -v
  npm -v
  ```

* ExpressJs

### Install

Follow the following steps to get development environment running.

1. Clone 'node-express' repository from GitHub

   ```bash
   git clone https://github.com/ashaftab0/node-express.git
   ```

   _or using ssh_
   ```bash
    git@github.com:ashaftab0/node-express.git
   ```

2. Install node modules

   ```bash
   cd node-express
   npm install
   ```

### Packages used
All the packages are saved as dependency in package.json, it will be automitacally installed.
But just for the informatiom about teh packages sinstalled and it's use.

* ExpressJs
For routing, templating and middleware
```bash
  npm install -g express -save
  ```

* nodemon
For watching the changes and restarting server.
```bash
  npm install -g nodemon
  ```

* body-parser
Helping post request using Express.
```bash
  npm install -g body-parser
  ```

* ejs
For templating .
```bash
  npm install -g ejs --save
  ```

### Run Node App

* Run Dev Server

  Start Node dev server
  ```javascript
  nodemon app.js
  ```
  or

```javascript
  node app
  ```
and Hit
 [http://localhost:3000/todo] to view it in the browser.

## Authors

* **Ashraf Aftab** - *Initial work* - [ashaftab0](https://github.com/ashaftab0)