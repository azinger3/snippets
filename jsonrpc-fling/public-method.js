Module.prototype.methodName = function (request, response) {
    const self = this;

    // params
    request.setParams(Object.assign({
        paramstring: '',
        paramint: 0
    }, request.getParams()));

    request.getParams().paramint = parseInt(request.getParams().paramint);

    // validate
    if (!request.getParams().paramstring.trim()) {
        response.addError(500, 'paramstring is missing');
    }

    if (!request.getParams().paramint) {
        response.addError(500, 'paramint is missing');
    }

    if (!response.isSuccess()) {
        response.send();
        return;
    }

    async.waterfall([
        (done) => { // step 1
            done(null, {
                stub: "stub",
                params: request.getParams()
            })
        }
    ], (err, result) => { // response
        if (err) {
            return response.send(err);
        }

        response.send(result);
    });
};