// Require main modules
const application = require("./application.js");

try {
  // Launch Server
  application.listen(3000, () => console.log("Server launched . . ."));
} catch (error) {
  console.log(error);
}
