const path = require("path");
const fs = require("fs");

function loadAllFixtures(testCasesDirectory) {
  const TEST_CASE_INPUT_EXTENSIONS = [".json", ".js"];

  return fs
    .readdirSync(testCasesDirectory)
    .filter(filename =>
      TEST_CASE_INPUT_EXTENSIONS.includes(path.extname(filename))
    )
    .map(filename => {
      const extName = path.extname(filename);
      const testCaseName = path.basename(filename, extName);

      return {
        name: testCaseName,
        data: JSON.parse(
          fs.readFileSync(path.join(testCasesDirectory, filename))
        )
      };
    });
}

module.exports = {
  loadAllFixtures
};
