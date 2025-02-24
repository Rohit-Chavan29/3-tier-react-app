For Local development

1.Run `npm install` in frontend directory to install all the dependencies and then do `npm start` which will start the development server on http://localhost:3000.

You will not be able to add anything since backend and postgress container is not running.

2.Similarly do the same in backend directory. And to connect to postgress container in backend/.env file replace DB_HOST=localhost. The backend will be accessible on http://localhost:5000/api/items

3. For postgress database use postgress container ` docker run -d -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v my-postgres-data:/var/lib/postgresql/data postgres:17.3`

Using Docker

1. Do `docker compose up -d` for running all the container

2. Do `docker compose down` to destroy the container
