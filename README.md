This repo deploys a 3 tier react app inside a ec2-server with help of github actions.

It gives an introduction to the github cicd.

To deploy this on your ec2-server,You can fork this repo.Replace the Dockerhub Creadentials with your credentials in Github variables and secret section.

Similarly do the same for ec2-server hostname and user.

To connect to ec2-server from github runner,generate private and public key in your local machine using `ssh-keygen -t rsa -b 4096 -C "github actions"`.Add the public key to ec2-server in .ssh/authorized_keys and add the private key in github secrets.

Make sure you install docker,docker-compose and git in your ec2-server.Have a security group for exposing port 81 for frontend and port 22 for ssh.


Run Using Docker

1. Do `docker compose up -d` for running all the container

2. Do `docker compose down` to destroy the container

