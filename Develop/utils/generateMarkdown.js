// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Created by: ${data.credit}
  ### License: ${data.license}

  Description of project: ${data.description}

  How to install and use: ${data.install}
  ${data.usage}

  How to test project: ${data.test}

  If you have questions or comments feel free to reach out to:
  ${data.contact}

  ![readme badge](https://badgen.net/badge/:GeneratedBy/:MiradeTM/:pink)
`;
}

module.exports = generateMarkdown;
