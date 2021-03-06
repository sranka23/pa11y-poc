"use strict";
const fs = require("fs");
const pa11y = require("pa11y");
const htmlReporter = require("pa11y-reporter-html");
const templateMarkup = require("./customMarkup");

runExample("https://google.com", "google home");

async function runExample(url, key) {
  //currently running only html codesniffer, to be integrated with axe-core
  try {
    const result = await pa11y(url, {
      timeout: 300000,
      wait: 6000,
      includeNotices: true,
      includeWarnings: true,
      log: {
        debug: console.log,
        error: console.error,
        info: console.log,
      },
    });

    console.log(result);

    // ^^ -- this is the final output required by the template.
    const htmlOutput = await htmlReporter.results(result);
    fs.writeFile(
      `output/${key}-report.html`,
      `${templateMarkup}${htmlOutput}`,
      function (err) {
        if (err) throw err;
        console.log("Task complete!");
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}
