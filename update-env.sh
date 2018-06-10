#!/bin/bash

#Buildar imagem do serviço e recriar
sudo docker build -t machinesnack-service ./Service
sudo docker stop machinesnack-service   
sudo docker rm machinesnack-service     
sudo docker run --name machinesnack-service -p 8000:8000 -v `pwd`/Service/:/opt/Service -d machinesnack-service 


#Buildar imagem do frontend e recriar
sudo docker build -t machinesnack-front-end ./Front-end
sudo docker stop machinesnack-front-end   
sudo docker rm machinesnack-front-end   
sudo docker run --name machinesnack-front-end -p 8080:8080 -v `pwd`/Front-end/:/opt/Front-end  -d machinesnack-front-end  