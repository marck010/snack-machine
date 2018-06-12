FROM mongo:latest
COPY ./post-deployment.js /opt/ 
RUN echo "mongo < /opt/post-deployment.js" >> /usr/local/bin/docker-entrypoint.sh
