FROM mhart/alpine-node:11
RUN apk update
RUN apk add git
ENV NODE_ENV production

RUN npm i -g forever

#RUN npm install pm2 -g --production
#RUN npm install -g strong-supervisor --production
# RUN npm install forever -g --production
# Create app directory
# RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
# COPY ../package.json /usr/app/

# Copy server
#COPY server.js /usr/src/app/

EXPOSE 8080

# Copy start.sh
#COPY start.sh /usr/app/

# VOLUME ["/usr/app"]

# CMD ["docker/start.sh"]

CMD sh start.sh
