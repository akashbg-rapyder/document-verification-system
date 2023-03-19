import { Upload } from "@aws-sdk/lib-storage";
import { S3Client} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';

var firstName, lastName, idNumber, birthDate
var userData = new Object();
var s3BucketName = process.env.REACT_APP_S3_BUCKET_NAME
var awsRegion = process.env.REACT_APP_AWS_REGION
var awsAccessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID
var awsSecretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY

export const upload = (file)=>{
  console.log(s3BucketName, awsRegion)
  const fileName = uuidv4();
  const s3BucketUrl = "https://"+s3BucketName +"."+awsRegion+".amazonaws.com/"+fileName+"";
  console.log("s3 bucket url"+s3BucketUrl);
  var file = file.target.files[0];
  const target = {Bucket: s3BucketName, Key:fileName, Body:file}
  const credentials = {accessKeyId:awsAccessKeyId, secretAccessKey:awsSecretAccessKey}
  try {
    const parallelUploads3 = new Upload({
      client: new S3Client({region:"ap-south-1", credentials:credentials}),
      params: target,
      leavePartsOnError: false,
    });
    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });
    parallelUploads3.done();
  } 
  catch (e) {
    console.log(e);
  }
}

export const buttoncliked = () => {
    firstName=document.querySelector("#firstName").value
    lastName=document.querySelector("#lastName").value
    idNumber=document.querySelector("#idNumber").value
    birthDate=document.querySelector("#birthDate").value
    userData = { 
      "firstName": firstName,
      "lastName": lastName,
      "idNumber": idNumber,
      "birthDate": birthDate
    };
    console.log(userData)
}