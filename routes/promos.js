const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the promo to you');
})
.post((req,res,next) => {
    res.end('will add all promos ' +req.body.name+' with details ' +req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /promos');
})
.delete((req,res,next) => {
    res.end('deleting all the promos');
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('will send details of the promo to you'+req.params.promoId);
})
.post((req,res,next) => {
    res.end('will add all promos ' +req.body.name+' with details ' +req.params.promoId);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /promos');
})
.delete((req,res,next) => {
    res.end('deleting all the promos');
});

module.exports = promoRouter;