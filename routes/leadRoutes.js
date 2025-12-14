
const express = require("express");
const router = express.Router();
const { processLeads, getLeads } = require("../controllers/leadController");

router.post("/", processLeads);
router.get("/", getLeads);

module.exports = router;
