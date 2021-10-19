const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('will send details of the leader to you');
})
.post((req,res,next) => {
    res.end('will add all leaderId ' +req.body.name+' with details ' +req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /leaders');
})
.delete((req,res,next) => {
    res.end('deleting all the leaders');
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end('will send details of the leader to you'+req.params.leaderId);
})
.post((req,res,next) => {
    res.end('will add all leaderId ' +req.body.name+' with details ' +req.params.leaderId);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end(' PUT operation not supported on /leaders');
})
.delete((req,res,next) => {
    res.end('deleting all the leaders');
});

module.exports = leaderRouter;