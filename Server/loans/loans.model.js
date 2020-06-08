const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fname: { type: String, unique: true, required: true },
    mname: { type: String, required: true },
    lname: { type: String, required: true },
    idno: { type: String, required: true },
    amount: { type: String, required: true },
    gfname: { type: String, unique: true, required: true },
    gmname: { type: String, required: true },
    glname: { type: String, required: true },
    gidno: { type: String, required: true },
    dob: { type: Date},
    dol: { type: Date, default: Date.now },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Loans', schema);