import * as answerModel from '../models/answer.model.js';

export const getAnswers = async (req, res) => {
  try {
    const { user_id } = req.query;
    const answers = await answerModel.getAnswers({ user_id });
    res.status(200).json(answers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching answers' });
  }
};

export const getAnswerById = async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await answerModel.getAnswerById(id);
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }
    res.status(200).json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching answer' });
  }
};

export const createAnswer = async (req, res) => {
  try {
    const newAnswer = await answerModel.createAnswer(req.body);
    res.status(201).json(newAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating answer' });
  }
};
