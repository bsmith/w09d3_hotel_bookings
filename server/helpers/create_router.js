const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const handleError = (err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
};

const createRouter = function(collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch(handleError);
    });

    return router;
}

module.exports = createRouter;