FROM mongo:latest
COPY ./post-deployment.js /opt/ 
RUN mongo < /opt/post-deployment.js
