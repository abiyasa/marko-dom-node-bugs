const { projectConfig } = require("marko-starter");
const isBuild = process.env.NODE_ENV === "production";

module.exports = projectConfig({
  name: "marko-bug",
  staticUrlPrefix: isBuild ? "/isuhardi/marko-bug" : "/static"
});
