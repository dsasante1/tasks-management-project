const checkTaskInput = (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Title cannot be empty!',
        data: null,
      });
    }

    if (!description) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Text cannot be empty!',
        data: null,
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
    checkTaskInput
}
