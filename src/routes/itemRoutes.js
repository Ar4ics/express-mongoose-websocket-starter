var express = require('express');
var app = express();
var itemRouter = express.Router();
var Item = require('../models/Item');

itemRouter.route('/').get(async function (req, res) {
    var items = await Item.find();
    res.render('items', { items });

});

itemRouter.route('/single').get(function (req, res) {
    res.render('singleItem');
});

itemRouter.route('/add').get(function (req, res) {
    res.render('addItem');
});

itemRouter.route('/add/post').post(async function (req, res) {
    var item = await (new Item(req.body)).save();
    res.redirect('/items');
});

module.exports = itemRouter;