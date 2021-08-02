FROM node
RUN npm install -g couchdb-wedge
RUN mkdir /app/
RUN cd /app && npm install pouchdb
ADD ./action.js /app/action.js
ENTRYPOINT wedge subscribe --actionPath /action.js --statePath /state.json --url $URL
