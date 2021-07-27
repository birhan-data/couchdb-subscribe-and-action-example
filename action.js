const pouchdb = require('pouchdb')

module.exports = async function(change, db) {
  const remoteDb = new pouchdb(process.env.REMOTE_DATABASE_URL)
  const doc = await db.get(change.id)
  if (!doc.dataVersion || doc.dataVersion < 1) {
    doc.foo = true
    doc.dataVersion = 1
  }
  if (!doc.dataVersion || doc.dataVersion < 2) {
    doc.yam = true
    doc.dataVersion = 2
  }
  await remoteDb.put(doc)
}