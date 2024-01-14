const newman = require("newman")

newman.run({
    collection: "../json-collection/jonathan-coll.postman_collection.json",
    environment: "../json-env/jonathan-env.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
