FROM node
RUN npm install -g https://github.com/ICTatRTI/CouchDB-Wedge.git
ADD ./action.js /action.js
ENTRYPOINT wedge subscribe --actionPath /action.js --statePath /state.json --url $URL
