# Repro for issue 6980

## Versions

node: v18.16.1<br>
firebase-tools: v13.7.1

## Steps to reproduce

1. Run `firebase deploy --project PROJECT_ID`
   - Would you like to proceed with deployment? Yes
1. In `functions/index.js`, change `minInstances` to `0`
1. Run `firebase deploy --project PROJECT_ID`
   - Error is raised

```log
[debug] [2024-04-11T13:23:35.595Z] TypeError: Cannot read properties of undefined (reading 'ram')
    at Object.monthlyMinInstanceCost (/<PATH>/firebase-tools/lib/deploy/functions/pricing.js:144:38)
    at /<PATH>/firebase-tools/lib/deploy/functions/prompts.js:139:32
    at Array.some (<anonymous>)
    at Object.someEndpoint (/<PATH>/firebase-tools/lib/deploy/functions/backend.js:263:38)
    at promptForMinInstances (/<PATH>/firebase-tools/lib/deploy/functions/prompts.js:124:35)
    at prepare (/<PATH>/firebase-tools/lib/deploy/functions/prepare.js:177:47)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async chain (/<PATH>/firebase-tools/lib/deploy/index.js:38:9)
    at async deploy (/<PATH>/firebase-tools/lib/deploy/index.js:95:5)
[error]
[error] Error: An unexpected error has occurred.
```
