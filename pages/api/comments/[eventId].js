function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if(!email.includes('@') ||
       !name ||
       name.trim() === '' ||
       !text ||
       text.trim() === '') {

      res.status(422).json({message: 'Invalid input'});
      return;
    }

    console.log(email, name, text);

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text
    }

    status(200).json({message: 'Added comment', comment: newComment});
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Yiro', text: 'Hello world'},
      { id: 'c2', name: 'Yujin', text: 'Hello world'},
      { id: 'c3', name: 'Kripto', text: 'Hello world'}
    ];

    status(200).json({ comments: dummyList});
  }
}

export default handler;
