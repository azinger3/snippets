Module.prototype.methodName = function (request, response) {
    const self = this;

    // params
    request.setParams(Object.assign({
        lpn: '',
        item: '',
        case: '',
        warehouseid: 0
    }, request.getParams()));

    request.getParams().warehouseid = parseInt(request.getParams().warehouseid);

    // validate
    if (!request.getParams().lpn.trim()) {
        response.addError(500, 'lpn is missing');
    }

    if (!request.getParams().item.trim()) {
        response.addError(500, 'item is missing');
    }

    if (!request.getParams().case.trim()) {
        response.addError(500, 'case is missing');
    }

    if (!request.getParams().warehouseid) {
        response.addError(500, 'warehouseid is missing');
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