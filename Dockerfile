FROM node:boron
WORKDIR /opt/snack-machine
ADD ./docker-entrypoint.sh .
RUN chmod +x ./docker-entrypoint.sh
EXPOSE 8000
ENTRYPOINT ./docker-entrypoint.sh
