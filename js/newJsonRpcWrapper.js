function _getOutboundRoute(self, warehouseId, agent, response, done) {
    self._rpc({
        method: 'fc.transload.getRoute',
        params: {
            warehouseid: warehouseId,
            typecodeid: 1321 // outbound
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