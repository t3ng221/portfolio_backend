const portfolio = require("../model/portfolio");
const crypto = require("crypto");

const createAboutInfo = async (ctx) => {
  try {
    const { about } = ctx.request.body;
    const id = crypto.randomUUID();
    await portfolio.createAboutInfo(id, about);
    ctx.response.created("Added About Info", {});
  } catch (error) {
    ctx.response.internalServreError("Error creating user:", error);
  }
};

const getAbout = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { about } = await portfolio.getAbout(id);
    ctx.response.ok("About Details Fetched", { about });
  } catch (error) {
    ctx.response.internalServreError("Error fetching user details:", error);
  }
};

const createExperience = async (ctx) => {
  try {
    const { name, position, duration, description } = ctx.request.body;
    const id = crypto.randomUUID();
    await portfolio.createExp(id, name, position, duration, description);
    ctx.response.created("Added Experience", {});
  } catch (error) {
    ctx.response.internalServreError("Error adding experience", error);
  }
};

const getExperience = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { experience } = await portfolio.getExp(id);
    ctx.response.ok("Experience Fetched", { experience });
  } catch (error) {
    ctx.response.internalServreError("Error fetching user details:", error);
  }
};

const getAllExperiences = async (ctx) => {
  try {
    const experiences = await portfolio.scanExps();
    ctx.response.ok("Experiences Fetched", { experiences });
  } catch (error) {
    ctx.response.internalServreError("Error fetching experiences:", error);
  }
};

const createContacts = async (ctx) => {
  try {
    const { name, email, message } = ctx.request.body;
    const id = crypto.randomUUID();
    const contact = await portfolio.createContact(id, name, email, message);
    ctx.response.ok("Contact saved successfully", { contact });
  } catch (error) {
    ctx.response.internalServreError("Error fetching experiences:", error);
  }
};

module.exports = {
  createAboutInfo,
  getAbout,
  createExperience,
  getExperience,
  getAllExperiences,
  createContacts,
};
