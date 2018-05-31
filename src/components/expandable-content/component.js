module.exports = {
  onCreate(input) {
    const model = input.model || {};
    const questions = model.questions || [];

    this.state = {
      questions: questions.map(createQuestionState)
    };
  },

  onQuestionClick(question) {
    // toggle expand/collpase
    question.isExpanded = !question.isExpanded;

    // need to do this due state changes only detectable 1-level deep
    // TODO use immutable list
    this.setStateDirty('questions');
  }
};

function createQuestionState(rawQuestion) {
  return Object.assign({ isExpanded: false }, rawQuestion);
}
