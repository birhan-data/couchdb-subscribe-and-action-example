module.exports = async function(change, db) {
  var doc = undefined
  try {
    doc = await db.get(change.id)
  } catch (err) {
    if (err.error == 'not_found') {
      return 0
    } else {
      console.log(`Error getting doc ${doc._id}: ${err.error}`)
      return -1
    }
  }
  if (!doc.dataVersion || doc.dataVersion < 1) {
    doc.foo = true
    doc.dataVersion = 1
    await db.put(doc)
  }
}
