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
