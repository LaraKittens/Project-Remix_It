const Joi = require("joi");

const exerciceUpdate = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).max(25),
  resources: Joi.string().alphanum().max(65535),
  description: Joi.string().alphanum().max(65535),
  tutoId: Joi.number(),
  levelId: Joi.number(),
});

const exerciceCreation = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  resources: Joi.string().alphanum().max(65535),
  description: Joi.string().alphanum().max(65535).required(),
  tutoId: Joi.number().required(),
  levelId: Joi.number().required(),
});

const levelCreation = Joi.object({
  name: Joi.string().min(3).max(25).required(),
});

const levelUpdate = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).max(25).required(),
});

const mediaUpdate = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().min(3).max(25),
  alt: Joi.string().min(3).max(255),
});

const mediaCreation = Joi.object({
  title: Joi.string().min(3).max(25).required(),
  alt: Joi.string().min(3).max(255).required(),
});

const themeUpdate = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).max(50),
  title: Joi.string().min(3).max(50),
  logo: Joi.string().min(3).max(50),
});

const themeCreation = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  title: Joi.string().min(3).max(50).required(),
  logo: Joi.string().min(3).max(50).required(),
});

const stepUpdate = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).max(25),
  desc: Joi.string().alphanum().max(65535),
  component: Joi.string().min(3).max(25),
  data: Joi.string().alphanum().max(65535),
});

const stepCreation = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  desc: Joi.string().alphanum().max(65535).required(),
  component: Joi.string().min(3).max(25).required(),
  data: Joi.string().alphanum().max(65535).required(),
});

const tutoUpdate = Joi.object({
  id: Joi.number().required(),
  desc: Joi.string().alphanum().max(65535),
  explication: Joi.string().alphanum().max(65535),
  ressources: Joi.string().alphanum().max(65535),
  name: Joi.string().min(3).max(25),
  levelId: Joi.number(),
  themeId: Joi.number(),
});

const tutoCreation = Joi.object({
  desc: Joi.string().alphanum().max(65535).required(),
  description: Joi.string().alphanum().max(65535).required(),
  ressources: Joi.string().alphanum().max(65535),
  name: Joi.string().min(3).max(25).required(),
  levelId: Joi.number(),
  themeId: Joi.number(),
});

const exerciceUserUpdate = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  isCheck: Joi.number().valid(0, 1).required(),
});

const exerciceUserCreation = Joi.object({
  exerciceId: Joi.number().required(),
  userId: Joi.number().required(),
  isCheck: Joi.number().valid(0, 1),
});

const tutoUserUpdate = Joi.object({
  tutoId: Joi.number().required(),
  userId: Joi.number().required(),
  isCheck: Joi.number().valid(0, 1).required(),
});

const tutoUserCreation = Joi.object({
  tutoId: Joi.number().required(),
  userId: Joi.number().required(),
  isCheck: Joi.number().valid(0, 1),
});

module.exports = {
  exerciceUpdate,
  exerciceCreation,
  levelCreation,
  levelUpdate,
  tutoUpdate,
  tutoCreation,
  mediaUpdate,
  mediaCreation,
  themeCreation,
  themeUpdate,
  stepCreation,
  stepUpdate,
  exerciceUserUpdate,
  exerciceUserCreation,
  tutoUserCreation,
  tutoUserUpdate,
};
