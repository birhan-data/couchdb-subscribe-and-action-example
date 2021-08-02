FROM node
RUN npm install -g couchdb-wedge
ADD ./action.js /action.js
ENTRYPOINT wedge subscribe --actionPath /action.js --statePath /state.json --url $URL
