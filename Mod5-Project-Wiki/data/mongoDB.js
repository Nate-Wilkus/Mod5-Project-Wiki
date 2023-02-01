const { MongoClient } = require('mongodb');
const dbUrl = 'mongodb://localhost:27017';
const client = new MongoClient(dbUrl);


// Connecting to Database 
const connect = async ()=>{
  return await client.connect(dbUrl)
}

// add db and collection 
const add = async(data)=>{
  // Create the DB 
  const db = await client.db('articlesdb')
  // Create collection 
  const articles = db.collection('articles');
  // Insert a document 
  let result = await articles.insert(data);
  return result
}


connect()
.then(()=>{
  return add({'name':'john'})
}).then((result)=>{
  console.log(result)
})