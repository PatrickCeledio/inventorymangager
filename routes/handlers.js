const express = require("express");
const router = express.Router();
const orm = require("../config/orm")

router.get("/", function(req, res) {
    orm.selectAll(function (error, all_inventory) {
        if (error) {
            return res.status(501).json({
                message: 'Unable to query the database'
            });
        }
        console.log('Database: ', all_inventory)
        res.render("index");
    });
});

module.exports = router;