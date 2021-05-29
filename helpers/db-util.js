import { MongoClient} from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejjn0.mongodb.net/events?retryWrites=true&w=majority`)

  return client
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();
  console.log(documents)
  return documents;
}
