// import AWS from 'aws-sdk';

// const aws = require('aws-sdk');
// const textract = new aws.Textract();

// const startDocumentTextDetection = async (bucket, document) => {
//   const params = {
//     DocumentLocation: {
//       S3Object: {
//         Bucket: bucket,
//         Name: document
//       }
//     },
//     JobTag: 'DetectingText'
//   };
//   const data = await textract.startDocumentTextDetection(params).promise();
//   return data.JobId;
// };
// // --------------------------------------------------------
// const getDocumentTextDetection = async (jobId) => {
//   const params = {
//     JobId: jobId
//   };
//   const data = await textract.getDocumentTextDetection(params).promise();
//   return data;
// };

// startDocumentTextDetection('my-bucket', 'my-document.pdf')
//   .then((jobId) => getDocumentTextDetection(jobId))
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));