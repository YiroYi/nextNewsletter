import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejjn0.mongodb.net/events?retryWrites=true&w=majority`)

    if(!email.includes('@') ||
       !name ||
       name.trim() === '' ||
       !text ||
       text.trim() === '') {

      res.status(422).json({message: 'Invalid input'});
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    }

     const db = client.db();

     const result = await db.collection('comments').insertOne(newComment);

    res.status(200).json({message: 'Added comment', comment: newComment});
    client.close();
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Yiro', text: 'Hello world'},
      { id: 'c2', name: 'Yujin', text: 'Hello world'},
      { id: 'c3', name: 'Kripto', text: 'Hello world'}
    ];

    res.status(200).json({ comments: dummyList});
  }

}

export default handler;
