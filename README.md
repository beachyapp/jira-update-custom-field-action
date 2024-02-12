# Update a custom field on a JIRA issue

This action will update a custom field on a JIRA issue to whatever value you specify

## Inputs

## `custom-field`

**Required** Name or id of the field you want to update

## `value`

**Required** Value of the field you want to update

## `issue-key`

**Required** The issue key you want to add the comment

## `jira-user-email`

**Required** JIRA user email

## `jira-api-token`

**Required** JIRA API token

## `jira-base-url`

**Required** JIRA base URL

## Example usage

```
- name: Find JIRA issue keys by commits
  id: issue-key-from-commits
  uses: beachyapp/jira-get-issue-key-action@v0.2
  ....
  ....
- name: Update summary of JIRA issue
  id: jira-update-custom-field-1
  uses: beachyapp/jira-update-custom-field-action@v0.2
  with:
    value: "this is a new summary"
    custom-field: "summary"
    issue-key: ${{steps.issue-key-from-commits.outputs.key}}
    jira-user-email: ${{ secrets.JIRA_USER_EMAIL }}
    jira-api-token: ${{ secrets.JIRA_API_TOKEN }}
    jira-base-url: ${{ secrets.JIRA_BASE_URL }}
- name: Update custom field of JIRA issue
  id: jira-update-custom-field-2
  uses: beachyapp/jira-update-custom-field-action@v0.2
  with:
    value: "new-value-here"
    custom-field: "customfield_10012"
    issue-key: ${{steps.issue-key-from-commits.outputs.key}}
    jira-user-email: ${{ secrets.JIRA_USER_EMAIL }}
    jira-api-token: ${{ secrets.JIRA_API_TOKEN }}
    jira-base-url: ${{ secrets.JIRA_BASE_URL }}
```

## Compiling and pushing changes

Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called @vercel/ncc to compile your code and modules into one file used for distribution.

Install vercel/ncc by running this command in your terminal.

`npm i -g @vercel/ncc`

Compile your index.js file.

`ncc build index.js --license licenses.txt`

You'll see a new dist/index.js file with your code and the compiled modules. You will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

Change the main keyword in your action.yml file to use the new dist/index.js file.

`main: 'dist/index.js'`

If you already checked in your node_modules directory, remove it.

`rm -rf node_modules/*`

From your terminal, commit the updates to your action.yml, dist/index.js, and node_modules files.

```shell
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```
