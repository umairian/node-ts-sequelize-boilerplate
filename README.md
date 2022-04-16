# Node, Express, and Sequelize With TypeScript Boilerplate

- Boilerplate application for building Node/Express, and Sequelize RESTful APIs with TypeScript

## Pre requisites

- Node 14.0

## Install dependencies

```
npm install or npm i
```

## Compile TypeScript code and Start Server

```
npm run server
```

Or

```
tsc | node ./dist/server.js
```

## Config

- For development, define required variables in dist/config/development.json
- For production, define required variables as environment variable in remote setup.

## Database

- If using mySQL for the project, use the following command to `install brew install mysql2`

## Contributing

- Every Database Table should have a corresponding Model file in `models` folder
- We use `Sequelize` as our ORM
- Use `npx sequelize` to cli for migrations
- The `controllers` and `routes` folder should exactly mimic each other. All routers in `routes` should have their corresponding `controllers` file/folder
- All logging should be done using `req.log`. It's a bunyan logger. For model level logging, `req.log` should be passed to underlying layers
