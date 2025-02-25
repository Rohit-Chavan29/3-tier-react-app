This repo deploys a 3 tier react app inside a ec2-server with help of github actions.

It gives an introduction to the github cicd.

To deploy this on your ec2-server,You can fork this repo.Replace the Dockerhub Creadentials with your credentials in Github variables and secret section.

Similarly do the same for ec2-server hostname and user.

To connect to ec2-server from github runner,generate private and public key in your local machine using `ssh-keygen -t rsa -b 4096 -C "github actions"`.Add the public key to ec2-server in .ssh/authorized_keys and add the private key in github secrets.

Make sure you install docker,docker-compose and git in your ec2-server.Have a security group for exposing port 81 for frontend and port 22 for ssh.



For Local development

1.Run `npm install` in frontend directory to install all the dependencies and then do `npm start` which will start the development server on http://localhost:3000.

You will not be able to add anything since backend and postgress container is not running.

2.Similarly do the same in backend directory. And to connect to postgress container in backend/.env file replace DB_HOST=localhost. The backend will be accessible on http://localhost:5000/api/items

3. For postgress database use postgress container ` docker run -d -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v my-postgres-data:/var/lib/postgresql/data postgres:17.3`

Using Docker

1. Do `docker compose up -d` for running all the container

2. Do `docker compose down` to destroy the container

