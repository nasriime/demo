const mongoose = require('mongoose');
const Staff = require('./staff.model');
const data = require('../public/javascripts/staff.json');

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true });

exports.seeder = () =>{
    let done = 0;
    for (let i = 0; i < data.staff.length; i++) {
        let staff = new Staff(data.staff[i]);
        staff.save(function(err, result) {
            done++;
            if (done === data.staff.length) {
                exit();
            }
        });
    }

}

function exit() {
    mongoose.disconnect();
}
