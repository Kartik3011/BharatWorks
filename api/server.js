import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Groq from "groq-sdk"; // Added for Saarthi

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// Initialize Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Knowledge Base for Saarthi
const SAARTHI_KNOWLEDGE_BASE = `
You are Saarthi, the AI assistant for BharatWorks. 
BharatWorks is an AI-driven freelancer marketplace specifically for Tier-2 and Tier-3 cities in India.
Key Information:
- It uses AI (BERT, TF-IDF) to rank freelancers and detect fraud.
- Commission: 5%-15%, which is lower than competitors.
- Features: Secure Escrow payments, multilingual support, and upskilling recommendations.
- Goal: Connect local talent with global and local opportunities.
Answer users helpfully and professionally as Saarthi.
`;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Saarthi Chatbot Route
app.post("/api/saarthi", async (req, res) => {
  const { message } = req.body;
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SAARTHI_KNOWLEDGE_BASE },
        { role: "user", content: message }
      ],
      model: "llama3-8b-8192",
    });
    res.status(200).json({ reply: chatCompletion.choices[0].message.content });
  } catch (err) {
    res.status(500).send("Saarthi is currently offline.");
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
