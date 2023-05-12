import AWS from "aws-sdk";

AWS.config.region = "eu-central-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:176dded5-bfe6-4b8d-8187-bccb40c5174f",
});

let s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "hr-system-bucket-equ" },
});

export async function checkFileExists(key) {
  try {
    let y = await s3.headObject({ Key: key }).promise();
    return true;
  } catch (error) {
    if (error.code === "NotFound") {
      return false;
    }
    throw error;
  }
}

export const s3Uploader = async (photoKey, body, callback) => {
  await s3.upload(
    {
      Key: photoKey,
      Body: body,
      ACL: "public-read",
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

export function dataURLtoFile(dataurl, filename) {
  console.log(dataurl, "vvvvvvvvvvvvvvvvv222");
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default uploadImage;
