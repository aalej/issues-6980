import * as functions from "firebase-functions";

export const myAppFunction = functions
  .runWith({
    memory: "4GB",
    timeoutSeconds: 540,
    minInstances: 1,
  })
  .region("us-west1")
  .firestore.document("documents/{documentId}/comments/{commentId}")
  .onCreate(() => {});
