FROM node
ENV URL http://user:pass@couchdb:5984/test
RUN npm install -g couchdb-wedge
ADD ./action.js /action.js
ENTRYPOINT wedge subscribe --actionPath /action.js --statePath /state.json --url $URL