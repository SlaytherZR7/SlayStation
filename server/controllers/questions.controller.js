import * as questionModel from '../models/question.model.js';

export const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.getQuestions();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

export const getQuestionsById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await questionModel.getQuestionById(id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching question' });
  }
};
