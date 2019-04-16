const mongoose = require('mongoose');
const Staff = require('./staff.model');
const staff = require('../public/javascripts/staff.json');

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true });

let done = 0;
for (let i = 0; i < staff.length; i++) {
    let staff = new Staff({
        id : staff[i].id,
        name: staff[i].name,
        department: staff[i].department
    });
    staff.save(function(err, result) {
        done++;
        if (done === staff.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}