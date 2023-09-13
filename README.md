# HNGX Stage 2 backend simple API
simple REST API capable of CRUD operations on a "person" resource, interfacing with mongoDb API dynamically handles parameters, such as adding or retrieving a person by name and also id. Accompany the development with UML diagrams to represent your system's design and database structure.  

# Functionality
API manages person names CRUD operations
supports
1. Get request: for single name
2. Post request to add names
3. Delete request for a name
4. Editting with bot Put and Patch requests for single names

# Error handling and validation
validation support has been added to ensure that values are only strings, and some security measures are in place to ensure proper names are entered without duplicates and no sql injections.
Any invalid entry will return an error statement

# action status
Every request will return either a "success" or "failed" status with proper html codes with message "errmsg" on failure.

