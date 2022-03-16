function _getPallet(self, pallet, warehouseId, response, done) {
    const sql = self._db.request('ultrawarehouse');

    if (!sql) {
        response.addError(500, 'database unavailable');
        done('fail');
        return;
    }

    sql.input('label', self._db.types.VarChar, pallet);
    sql.input('warehouse_id', self._db.types.Int, warehouseId);

    sql.execute('dbo.pr_pallet_ins', (err, recordsets) => {
        if (err) {
            response.addError({
                code: 500,
                message: 'error executing database query',
                data: {
                    _proc: 'dbo.pr_pallet_ins',
                    err: err
                }
            });

            return done('fail');
        }

        done(null);
    });
}