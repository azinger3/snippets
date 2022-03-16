function _getPallet(self, pallet, warehouseId, response, done) {
    const sql = self._db.request('ultrawarehouse');

    if (!sql) {
        response.addError(500, 'database unavailable');
        done('fail');
        return;
    }

    sql.input('label', self._db.types.VarChar, pallet);
    sql.input('warehouse_id', self._db.types.Int, warehouseId);

    sql.execute('dbo.pr_pallet_by_label_sel', (err, recordsets) => {
        if (err) {
            response.addError({
                code: 500,
                message: 'error executing database query',
                data: {
                    _proc: 'dbo.pr_pallet_by_label_sel',
                    err: err
                }
            });

            return done('fail');
        }

        let result = {};

        if (!recordsets[0].length) {
            response.addError(500, `${pallet} is not valid.`);
            return done('fail');
        }

        result = {
            palletId: recordsets[0][0].pallet_id,
            palletCode: recordsets[0][0].pallet_code,
            label: recordsets[0][0].label,
            warehouseId: recordsets[0][0].warehouse_id,
            statusCodeId: recordsets[0][0].status_code_id,
            datetimeAdded: recordsets[0][0].datetime_added,
            datetimeModified: recordsets[0][0].datetime_modified,
            outboundPalletId: recordsets[0][0].outbound_pallet_id
        };

        done(null, result);
    });
}