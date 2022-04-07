const core = require('@actions/core');
const fetch = require('cross-fetch');
const base64 = require('base-64');

try {
  const value = core.getInput('value');
  const customField = core.getInput('custom-field');
  const issueKey = core.getInput('issue-key');
  const jiraBaseUrl = core.getInput('jira-base-url');
  const jiraUserEmail = core.getInput('jira-user-email');
  const jiraApiToken = core.getInput('jira-api-token');
  const url = `${jiraBaseUrl}/rest/api/3/issue/${issueKey}`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + 
      base64.encode([jiraUserEmail, jiraApiToken].join(':'))
    }
  };

  fetch(url, {
    ...options, 
    method: 'PUT', 
    body: `{
      "fields": {
      "${customField}": "${value}"
      }
    }`
  }).then(console.info).catch(err => {
    console.error(err);
  });

} catch (error) {
  core.setFailed(error);
}
