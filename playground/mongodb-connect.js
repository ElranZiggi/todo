// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if (err){
		return console.log('Unable to connect. Error: ' + err)
	}

	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

	db.collection('Todos').find({}).count().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (error) =>{

	});

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert Todo. Error: ' + err)
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Elran',
	// 	age: 30,
	// 	location: 'Israel'
	// }, (err, result) =>{
	// 	if (err){
	// 		return console.log('Unable to insert User. Error: ' + err)
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});