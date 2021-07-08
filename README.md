# bitcointest api
* API 

## Tools Used
| **Dependency** | **Use** |
|----------|-------|
|Nodejs|It is fast. It is JavaScript run-time environment for executing JavaScript code|
|Postgresql| An object-relational database management system (ORDBMS)|
|Sequelize|A promise-based ORM for Node.js. It helps with data conversion|
|Express| A flexible Node.js web application framework|
|redis| For Caching|
|Babel||


* Find Postman API here https://www.getpostman.com/collections/c75647837e9f25e6ba2a

### Set Up locally
* git clone
* cd to bitcoin-app
* install postgres
* install sequelize-cli globally

### Installing dependencies
Run
```
npm install
```

### DB set up
* create a user role named postgres by running

```
CREATE USER postgres SUPERUSER;
```

run
```
psql postgres
```

In the Postgres Shell run:
```
CREATE DATABASE databasename;
```

```
\connect databasename;
```

### Populate the DB with meal and user data
In your terminal cd to 

```npx sequelize db:migrate
```

OR

```
npm run db:migrate
```


### To start the app
* Start app

``` 
npm run start:dev
```

### To store and index Bitcoin OP_RETURN data for all transactions after a certain block.
* startHeight is optional

``` 
npm run index <startHeight>
```

### To get the associated transaction hashes and block hashes for all matching transactions​ use the get endpoint

``` 
`${baseUrl}/opreturn/${opReturnData}`
```