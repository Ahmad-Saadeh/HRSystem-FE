import AWS from "aws-sdk";
import Compressor from "compressorjs";
import Live from "./Live";
import removeBg from "./removeBg";

AWS.config.region = "eu-central-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:176dded5-bfe6-4b8d-8187-bccb40c5174f",
});

let s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "markabte-static" },
});

const s3Uploader = async (photoKey, body, callback) => {
  await s3.upload(
    {
      Key: photoKey,
      Body: body,
      ACL: "public-read",
      ContentType: "appliaction/pdf",
    },
    async function (err, data) {
      if (err) {
        return alert("There was an error uploading your photo: ", err.message);
      }
      callback(data);
      return data;
    }
  );
};

const uploadImage = async (file, fileName, callback) => {
  let photoKey = "DTC_Reports/" + fileName;
  await s3Uploader(photoKey, file, callback);
};

export default uploadImage;
