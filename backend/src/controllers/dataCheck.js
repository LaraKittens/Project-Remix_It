const {
  exerciceUpdate,
  exerciceCreation,
  musicExampleCreation,
  musicExampleUpdate,
  mediaCreation,
  mediaUpdate,
  themeCreation,
  themeUpdate,
  stepCreation,
  stepUpdate,
  tutoCreation,
  tutoUpdate,
  exerciceUserUpdate,
  exerciceUserCreation,
  tutoUserCreation,
  tutoUserUpdate,
} = require("../schemas/joiSchemas");

const tutoCheckCreation = (req, res, next) => {
  const { error } = tutoCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const tutoCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = tutoUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const exerciceCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = exerciceUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const exerciceCheckCreation = (req, res, next) => {
  const { error } = exerciceCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};
const musicExampleCheckCreation = (req, res, next) => {
  const { error } = musicExampleCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const musicExampleCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = musicExampleUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const mediaCheckCreation = (req, res, next) => {
  const { error } = mediaCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const mediaCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = mediaUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const themeCheckCreation = (req, res, next) => {
  const { error } = themeCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const themeCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = themeUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const stepCheckCreation = (req, res, next) => {
  const { error } = stepCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const stepCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = stepUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const exerciceUserCheckCreation = (req, res, next) => {
  const { error } = exerciceUserCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const exerciceUserCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = exerciceUserUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const tutoUserCheckCreation = (req, res, next) => {
  const { error } = tutoUserCreation.validate({
    ...req.body,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

const tutoUserCheckUpdate = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const { error } = tutoUserUpdate.validate({
    ...req.body,
    id,
  });
  if (!error) {
    next();
  } else {
    res.status(400).send(error);
  }
};

module.exports = {
  exerciceCheckUpdate,
  exerciceCheckCreation,
  musicExampleCheckCreation,
  musicExampleCheckUpdate,
  mediaCheckCreation,
  mediaCheckUpdate,
  themeCheckCreation,
  themeCheckUpdate,
  stepCheckCreation,
  stepCheckUpdate,
  tutoCheckCreation,
  tutoCheckUpdate,
  exerciceUserCheckCreation,
  exerciceUserCheckUpdate,
  tutoUserCheckCreation,
  tutoUserCheckUpdate,
};
