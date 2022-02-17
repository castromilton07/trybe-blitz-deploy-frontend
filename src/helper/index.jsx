const TITLE_SIZE = 6;

const validateTitleSubmit = (title) => {
  if (title.length < TITLE_SIZE) return false;
  return true;
};

module.exports = { validateTitleSubmit };
