function _getJsonRpcWrapper(self, param1, agent, response, done) {
    self._rpc({
        method: 'namespace.module.method',
        params: {
            param1: param1,
            param2: 0
        },
        context: agent
    }, (err, data) => {
        if (err) {
            response.addError(err);
            return done(err);
        }

        done(null, data);
    });
}