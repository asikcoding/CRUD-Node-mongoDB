const mongoose = require('mongoose')
//coneksi mongoDB
mongoose.connect('mongodb://localhost:27017/siakad',{ useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('Conneksi Sukses')
    }else{
        console.log('koneksi gagal' + err);
    } 
});
// use Pegawai Model
require('./pegawai.model')