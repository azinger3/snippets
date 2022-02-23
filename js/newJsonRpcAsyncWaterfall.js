async.waterfall([
    (done) => { // get dock door divert
        _getDivertByLocation(
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
    (wcsDivertId, done) => { // get divert carrier services
        if (!wcsDivertId) {
            return done(null, []);
        }

        _getDivertCarrierServices(
            self,
            wcsDivertId,
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
    (divertCarrierServices, done) => { // compare divert to container services
        if (!divertCarrierServices.length) {
            return done(null, true);
        }

        let carrierFound = false;

        divertCarrierServices.forEach((d) => {
            containerCarrierServices.forEach((c) => {
                if (d === c) {
                    carrierFound = true;
                }
            });
        });

        done(null, carrierFound);
    },
    (carrierFound, done) => { // validate
        if (!carrierFound) {
            response.addError(500, `Carrier does not match chute.`);
            return done('fail');
        } else {
            done(null);
        }
    }
], function (err) {
    done(err);
});