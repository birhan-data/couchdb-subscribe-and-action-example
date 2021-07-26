module.exports = async function(change, db) {
  const doc = await db.get(change.id)
  if (!doc.dataVersion || doc.dataVersion < 1) {
    doc.foo = true
    doc.dataVersion = 1
  }
  await db.put(doc)
}