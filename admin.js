admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "devops",
    pwd: "lasjhdfajshdjkashdjkashdjkhasdjkhadjkashkjhasd",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("devops", "lasjhdfajshdjkashdjkashdjkhasdjkhadjkashkjhasd" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "lasjhdfajshdjkashdjkashdjkhasdjkhadjkashkjhasd",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
