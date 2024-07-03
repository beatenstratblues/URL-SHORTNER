const shortid = require("shortid");
const { URL } = require("../models/url");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const sId = shortid();
  await URL.create({
    shortId: sId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: sId });
}

module.exports = { generateNewShortURL };
