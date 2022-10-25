import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log(name);
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "inavlid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    //store in a db
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.qafjedp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "couold not connect to database" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.inseretedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "data did not save to database!" });
      return;
    }
    client.close();

    res
      .status(201)
      .json({ message: "email sent successfully", message: newMessage });
  }
}

export default handler;
