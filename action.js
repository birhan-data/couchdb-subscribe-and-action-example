PARTICIPANT_IDS = [
"1997cbb6-dc3d-47b0-b807-87add6c6ba15",
"1ff26e57-5333-457f-a4fb-65e61f3162c7",
"28662361-3043-41ab-a1c8-7ca2f611a0a6",
"38213c25-16ec-41cd-a5e7-fbce1e59c427",
"40f17f9d-1979-430f-88f2-5a34afce071e",
"488e31d8-7194-4907-83bc-089196a8d323",
"52b910c6-1f20-4e5e-880d-9dfb18b095e7",
"5a9e5f5b-f76f-467a-a31f-8c7b10428d56",
"5cf337f7-720f-4658-a0e7-b8781c53a3ab",
"5d6a16ff-91d8-4330-9692-d3e2a6c88716",
"5e48f66c-4411-4139-8d71-4720cace14c0",
"5f1c9e79-34a3-4624-b123-1c808525fb30",
"5f92a235-f954-48d1-9213-aea6f7fcf005",
"685161d4-0d73-47a6-b56a-f43bed9565c3",
"688426e5-65ad-4572-8755-39063a869913",
"6fac80cd-b630-4308-8375-2122cb504fe5",
"7e15e57d-01fb-4e3f-87a5-b1b2f03d496f",
"8294200a-cec2-4969-a9af-27607d6d9eea",
"91b423bd-4450-436c-bf9d-3d29f1e0d3d5",
"b083e793-02c1-4c7d-a07e-4c80b197b112",
"b2b28dac-70c9-43a4-97ae-ab31239e9e67",
"b5eda35f-3609-4b3a-911a-0946c5d86ec9",
"bd42b521-8d88-4051-86b9-60216fd9bd3b",
"c04e8bf2-a6c7-4a2c-a3ca-ab6b55f671c1",
"d2c9a6de-6cb8-4153-90d0-8907a524956c",
"dca1444dd3e143b78dce7b3144d53ca6",
"dd5e5e35-dcd5-4743-b4dd-bfc1ca51f642",
"df9d102aec3142218e88654abc79a0e7",
"ea4dd29f-180d-4812-b5bf-977411501f91",
"ee25bba5-6c7c-419e-96d6-a958b0fae46d",
"ef5bf300-e2b5-409b-8588-a0a67273f73e",
"fb450a9d-e820-42a9-aa29-48c5a5986b26",
"fce29fd3-69bd-4e37-8488-bc0831513acf"
]

module.exports = async function(change, db) {
  const doc = await db.get(change.id)
  if (doc.type === 'case') {

    let participants = doc.participants.filter(_ =>
      _.caseRoleId != 'household-role'
    )
    var changed = false
    for (var participant in doc.participants) {
      if (PARTICIPANT_IDS.includes(participant.id)) {
        participant.data.dob_known = false 
        participant.data.age_last_set = _.data.dob
        delete participant.data.dob

        changed = true
      }
    }
    if (changed) {
      console.log(`Changed participants in case ${doc._id}`)
      //await db.put(doc)
    }
  }
}