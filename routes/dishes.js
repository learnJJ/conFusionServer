const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the dishe to you');
})
.post((req,res,next) => {
    res.end('will add all dishes ' +req.body.name+' with details ' +req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /dishes');
})
.delete((req,res,next) => {
    res.end('deleting all the dishes');
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end('will send details of the dishe to you'+req.params.dishId);
})
.post((req,res,next) => {
    res.end('will add all dishes ' +req.body.name+' with details ' +req.params.dishId);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /dishes');
})
.delete((req,res,next) => {
    res.end('deleting all the dishes');
});

module.exports = dishRouter;