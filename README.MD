# recruitment-task

![alt text](./assets/image/%E2%8C%A8_recruitment-task.png)

## Installation

* Clone this repository 
```bash
$ git clone https://github.com/ShaanCoding/ReadME-Generator.git
```
* Go into the repository 
```bash
$ cd recruitment-task 
```

* Install dependencies 
```bash
yarn 
```
* Create .env file

* add your own database in the .env file
```bash
## Port to listen on
PORT=8080

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/Company

# Database connection string
PGUSER = your PGUSER
PGHOST = your PGHOST
PGPASSWORD = your PGPASSWORD
PGDATABASE = your PGDATABASE
PGPORT = your PGPORT
```

## Usage
* Run the app for mongoDB

1- run command
```
yarn start
```
2- In the browser go to
```
http://localhost:8080 --> for welcome route
http://localhost:8080/api --> for getting all data from API and save them to the DB
http://localhost:8080/postal_codes/00930/companies --> Get all companies based on postal code 00930 
http://localhost:8080/postal_codes/02100/companies --> Get all companies based on postal code 02100 
http://localhost:8080/postal_codes/01730/companies --> Get all companies based on postal code 01730
```

* Run the app for postgreSQL

1- run command
```
yarn start
```
2- In the browser go to
```
http://localhost:8080 --> for welcome route
http://localhost:8080/api --> for getting all data from API and save them to the DB
http://localhost:8080/postal_codes/00930/companies --> Get all companies based on postal code 00930 
http://localhost:8080/postal_codes/02100/companies --> Get all companies based on postal code 02100 
http://localhost:8080/postal_codes/01730/companies --> Get all companies based on postal code 01730
```