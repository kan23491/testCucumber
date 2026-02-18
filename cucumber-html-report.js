const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "cypress/cucumber-json", // Directory where JSON reports are saved
  reportPath: "./report/cucumber-htmlReport.html", // Output directory for the HTML report
  metadata: {
    browser: {
      name: "chrome",
      version: "144" // Replace with dynamic version fetching if needed
    },
    device: "Local machine",
    platform: {
      name: "windows", // e.g., 'windows', 'mac', 'linux'
      version: "any"
    }
  },
});
