async.waterfall([
    (done) => { // get data
        _getData(
            self,
            locationId,
            agent,
            response,
            (err, data) => {
                if (err) {
                    return done(err);
                }

                done(null, data);
            }
        );
    },
    (data, done) => { // get more data
        if (!param) {
            return done(null, []);
        }

        _getMoreData(
            self,
            param,
            agent,
            response,
            (err, data) => {
                if (err) {
                    return done(err);
                }

                done(null, data);
            }
        );
    },
    (data, done) => { // determine if data was found
        if (!data.length) {
            return done(null, true);
        }

        done(null, false);
    },
    (dataFound, done) => { // validate
        if (!dataFound) {
            response.addError(500, `No data found.`);
            return done('fail');
        } else {
            done(null);
        }
    }
], function (err) {
    done(err);
});