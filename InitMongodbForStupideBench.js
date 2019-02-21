

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/garden";

MongoClient.connect(url, { useNewUrlParser: true, poolSize:10 }, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbase = db.db("mydb");

    dbase.createCollection('person', function (err, res) {
        if (err) throw err;
        console.log(" person 创建集合!");
        db.close();
    });


    dbase.createCollection('orders', function (err, res) {
        if (err) throw err;
        console.log(" orders 创建集合!");
        db.close();
    });

    dbase.createCollection('products', function (err, res) {
        if (err) throw err;
        console.log(" products 创建集合!");
        db.close();
    });

    dbase.createCollection('inventory', function (err, res) {
        if (err) throw err;
        console.log(" inventory 创建集合!");
        db.close();
    });

    dbase.createCollection('review', function (err, res) {
        if (err) throw err;
        console.log(" review 创建集合!");
        db.close();
    });

    dbase.createCollection('categories', function (err, res) {
        if (err) throw err;
        console.log(" categories 创建集合!");
        db.close();
    });

    dbase.createCollection('shoppingcart', function (err, res) {
        if (err) throw err;
        console.log(" shoppingcart 创建集合!");
        db.close();
    });

    dbase.createCollection('users', function (err, res) {
        if (err) throw err;
        console.log(" users 创建集合!");
        db.close();
    });


    /*
    var json = require('./aaaa.json');
    var objectKeys = Object.keys(json);
    //console.log('objectKeys: ', objectKeys);

    Object.keys(json).map(e => {
        //console.log(`key= ${e} value = ${json[e]}`)
    });

    Object.entries(json).forEach(([key, value]) => {
       // console.log(`key= ${key} value = ${value}`)
    })

    function deepIterator (target, keyStr) {
        if (typeof target === 'object') {
            for (const key in target) {
               //console.log(key, target[key])
                if(key == '_id'){
                    let aObj = target[key]['$oid']
                    target[key] = 'ObjectId('+'\"'+aObj+'\")'
                    continue;
                }
                if(key == 'parent_id'){
                    let aObj = target[key]['$oid']
                    target[key] = 'ObjectId('+'\"'+aObj+'\")'
                    continue;
                }
                deepIterator(target[key], key);
            }
        } else {
            console.log(keyStr, target);
        }
    }

    function shallowIterator (target) {
        for (const key in target) {
            console.log(key, target[key]);
        }
    }


    deepIterator(json, 'key')
    shallowIterator(json);
    */
/*
    function *processData(data){
        if (!data) { return; }

        for (var i = 0; i< data.length; i++){
            var val = data[i];
            yield val['_id'];

            if (val.children) {
                yield *processData(val.children);
            }
        }
    }

    let it = processData(json)
    var res = it.next();

    while(!res.done){
        console.log(res.value);
        res = it.next();
    }

*/

   /*
    dbase.collection("site").insertOne(json, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
    */


});




