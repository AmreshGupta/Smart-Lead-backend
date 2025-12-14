
const Lead = require("../models/Lead");
const { getNationality } = require("../services/nationalizeService");

exports.processLeads = async (req, res) => {
  try {
    const names = req.body.names;

    const results = await Promise.all(
      names.map(async (name) => {
        const data = await getNationality(name);

        let country = "Unknown";
        let probability = 0;
        let status = "To Check";

        if (data) {
          country = data.country_id;
          probability = data.probability;
          status = probability > 0.6 ? "Verified" : "To Check";
        }

        return await Lead.create({ name, country, probability, status });
      })
    );

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLeads = async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
};
