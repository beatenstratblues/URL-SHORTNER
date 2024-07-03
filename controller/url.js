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

async function redirectAndUpdate(req, res) {
  const shortID=req.params.Shortid;
  const entry= await URL.findOneAndUpdate({
    shortId:shortID,
  },{
    $push:{
      visitHistory:{
        timestamp: Date.now(),
      }
    }
  })
  console.log(entry);
  res.redirect(entry.redirectUrl);
}

module.exports = { generateNewShortURL,redirectAndUpdate };
