function _getJsonRpcSqlReadList(self, param1, param2, response, done) {
    const sql = self._db.request('configkey');

    if (!sql) {
        response.addError(500, 'database unavailable');
        done('fail');
        return;
    }

    sql.input('param1', self._db.types.Int, param1);
    sql.input('param2', self._db.types.Int, param2);

    sql.execute('sproc', (err, recordsets) => {
        if (err) {
            response.addError({
                code: 500,
                message: 'error executing database query',
                data: {
                    _proc: 'sproc',
                    err: err
                }
            });

            return done('fail');
        }

        let result = {};
        let list = [];

        result = {
            list: []
        }

        if (recordsets[0].length > 0) {
            recordsets[0].forEach((record) => {
                list.push(record.key_id);
            });

            result.list = list;
        }

        done(null, result);
    });
}