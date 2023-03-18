// import AWS from 'aws-sdk';

// // create an S3 client instance
// const s3 = new AWS.S3({
//   accessKeyId: 'AWS Access Key ID here',
//   secretAccessKey: 'AWS Secret Access Key here',
//   region: 'AWS Region here',
// });

// // upload function
// function uploadFileToS3(file, uniqueFilename) {
//   const params = {
//     Bucket: 'S3 Bucket name here',
//     Key: uniqueFilename,
//     Body: file,
//     ACL: 'public-read', // set permissions as desired
//   };

//   // upload the file to S3
//   s3.upload(params, (err, data) => {
//     if (err) {
//       console.log(`File upload error: ${err}`);
//     } else {
//       console.log(`File uploaded successfully: ${data.Location}`);

//       // send the file name and location to the backend
//       fetch('/api/upload', {
//         method: 'POST',
//         body: JSON.stringify({ filename: uniqueFilename, location: data.Location }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//   });
// }