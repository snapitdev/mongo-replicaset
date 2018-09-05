admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "devops", [ "root" , { role: "root", db: "admin" } ] )
