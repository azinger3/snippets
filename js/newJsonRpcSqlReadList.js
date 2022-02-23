function _getCarrierServicesForPallet(self, warehouseId, carrierServiceId, response, done) {
    const sql = self._db.request('ultrawarehouse');

    if (!sql) {
        response.addError(500, 'database unavailable');
        done('fail');
        return;
    }

    sql.input('warehouse_id', self._db.types.Int, warehouseId);
    sql.input('carrier_service_id', self._db.types.Int, carrierServiceId);

    sql.execute('dbo.pr_yard_carrier_service_by_carrier_service_lst', (err, recordsets) => {
        if (err) {
            response.addError({
                code: 500,
                message: 'error executing database query',
                data: {
                    _proc: 'dbo.pr_yard_carrier_service_by_carrier_service_lst',
                    err: err
                }
            });

            return done('fail');
        }

        let result = {};
        let carrierServices = [];

        // carrier services
        result = {
            carrierServices: []
        }

        if (recordsets[0].length > 0) {
            recordsets[0].forEach((carrierService) => {
                carrierServices.push(carrierService.carrier_service_id);
            });

            result.carrierServices = carrierServices;
        }

        done(null, result);
    });
}