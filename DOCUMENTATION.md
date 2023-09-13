# Person API documentation
A Simple dynamic API for registration of Person names with basic CRUD functionalitis

end point https://kind-puce-xerus-garb.cyclic.app/api

# POST REQUEST

https://kind-puce-xerus-garb.cyclic.app/api

adds a name to the data base.
Name is sent as a key, value json format of "name" and "value", no other keys will be accepted.
Value must be a string, otherwise it will return an error object.
e.g post request body
{
    "name": "jane doe"
}
on success:
{
"status": "success",
"createdPerson": {
"name": "jane doe",
"_id": "6501e2a91125dcc33c77dff6",
"__v": 0
}
}
on failure:
duplicate values:
{
"status": "failed",
"errmsg": "Error creating person: possible duplicate values"
}
in valid entry
StartFragment
{
"status": "failed",
"errmsg": "Please provide a valid name"
}

# GET REQUEST

https://kind-puce-xerus-garb.cyclic.app/api/userid
or 
https://kind-puce-xerus-garb.cyclic.app/api/name

Gets a name with its details either with the id e.g

"/6501e2a91125dcc33c77dff6"

or with the name "/ellon musk"

returns the object of details for the name, or error (same as add person)

# DELETE REQUEST

deletes a name from the database
usage
"/6501e2a91125dcc33c77dff6"
or with the name "/ellon musk"
returns the object of details for the name, or error (same as add person) or person not found error
{ "status": "failed", "errmsg": "Person was not found"}

# PATCH or PUT
updates a name in the database
usage
"/6501e2a91125dcc33c77dff6"
or with the name "/ellon musk"
a new name object must be sent
returns the object of details for the name after update, or error (same as add person) or person not found error
{ "status": "failed", "errmsg": "Person was not found"}

# Requirements
1. Node Js with or without nodemon (recommended for further deveopment)
2. Mongo Db account with a running cluster
3. Local server or hosted server

# Set up
clone the repository or download
cd into the directory
install with npm install or yarn install
add environment variables, MONGO_URI (connection string) only for hosted server, on local machine, create a ".env" file, add the following variables: MONGO_URI and PORT
npm or yarn start or npm run dev (for nodemon)
Good to go,
