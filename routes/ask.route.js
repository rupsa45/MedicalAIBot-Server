const express = require("express");
const router = express.Router();


const { llm, systemPrompt } = require("../services/llm.service");

const { HumanMessage } = require("@langchain/core/messages");
const isMedicalQuestion = require("../utils/medicalGuard");


router.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  if (!(await isMedicalQuestion(question))) {
  return res.status(403).json({ error: "Only medical-related questions are allowed." });
}

  try {
    const response = await llm.invoke([
      systemPrompt,
      new HumanMessage(question)
    ]);

    res.json({ answer: response.content });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Failed to process the question." });
  }
});

module.exports = router;

module.exports = router;
