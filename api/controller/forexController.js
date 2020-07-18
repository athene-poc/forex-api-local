'use strict';
var url = require('url');
var Forex = require('../service/forexService');

exports.list_all = async function(req, res) {
    var forexJSON = await Forex.requestAsync();
    res.json(forexJSON);
};

exports.list_base = async function(req, res) {
    var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
    var q = url.parse(adr, true);
    var qdata = q.query;
    
    var forexJSON = await Forex.requestAsyncParam(qdata.base);
    res.json(forexJSON);
};