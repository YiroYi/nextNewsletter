import { MongoClient} from 'mongodb';

async function handler(req, res) {
  if(req.method === 'POST') {
    const userEmail = req.body.email;

    if(!userEmail || !userEmail.includes('@')) {
      res.status(422).json({message: 'Invalid email'});
      return;
    }
    console.log(process.env.DB_USER)
    console.log(process.env.DB_PASSWORD)
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejjn0.mongodb.net/newsletter?retryWrites=true&w=majority`)

    const db = client.db();

    await db.collection('emails').insertOne({email: userEmail});

    client.close();

    res.status(200).json({message: 'Signed up'});
  }
}

export default handler;

