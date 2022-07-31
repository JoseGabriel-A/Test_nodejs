# Test_nodejs

This repository have two folders, api-integration and Tech-exercises.

## Table of contents

- [api-integration](#api-integration)
- [mongo db container build](#mongo-db-container-build)
- [crud explanation](#crud-explanation)

## api-integration

to run this, you need:

- Nodejs.
- Js.
- docker-compose.

### mongo db container build:

inside the folder mongodb_server:

```bash
docker-compose up -d
```

we can check that the container is runing , with the command:

```bash
docker ps
```

### crud explanation

1- We need install the modules with :

```bash
npm install
```

2- Run the command: `npm run dev` nodejs up the server on the local host : _http://localhost:3000/_ (by default)<br>

3-we don't have any item in the database, therefore, the next step is load data, the main page is : Nodejs Mongodb CRUD Classroom, here you can add a new classroom data and save them with "Add New Classroom" button.<br>
4-with some items loaded in the db you can Edit , delete or "toggle status".<br>
5-The same steps are valid for the load, edit,delete and toggle for the students data, you can access with the button "View or modify Classroom Data".
