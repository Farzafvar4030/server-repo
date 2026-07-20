// Require main packages
const express = require("express");

const application = express();

// Server launch
application.listen(3000, () => console.log("Server launched . . ."));
