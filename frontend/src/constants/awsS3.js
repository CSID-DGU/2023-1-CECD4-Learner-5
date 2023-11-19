import AWS from "aws-sdk";

const config = {
  aws_reg: "ap-northeast-2", // aws 지역 ex ) ap-northeast-2
  aws_key: process.env.REACT_APP_AWS_ACCESS_KEY, // aws 키
  aws_sec: process.env.REACT_APP_AWS_SECRET_KEY, // aws 시크릿 키
};

AWS.config.update({
  region: config.aws_reg,
  accessKeyId: config.aws_key,
  secretAccessKey: config.aws_sec,
});

const s3 = new AWS.S3();

const getImg = async (company, store) => {
  async function download(filename) {
    const data = await s3
      .getObject({
        Key: filename,
        Bucket: "learnerbucket-1", // 버킷 이름
      })
      .promise();
    // https://learnerbucket-1.s3.ap-northeast-2.amazonaws.com/art/art1.jpeg
    const blob = new Blob([data.Body], { type: "image/jpeg" });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(blob);

    return imageUrl;
  }

  let data;

  try {
    data = await download(`${company}/${store}.jpeg`);
  } catch {
    try {
      data = await download(`${company}/${store}.jpg`);
    } catch {
      try {
        data = await download(`${company}/${store}.png`);
      } catch (err) {
        data = "";
        console.log(err);
      }
    }
  }

  console.log(data);
  return data;
};

const getVideo = async (company, store) => {
  async function download(filename) {
    const data = await s3
      .getObject({
        Key: filename,
        Bucket: "learnerbucket-1", // 버킷 이름
      })
      .promise();

    const blob = new Blob([data.Body], { type: "video/mp4" });
    const urlCreator = window.URL || window.webkitURL;
    const vedioUrl = urlCreator.createObjectURL(blob);

    return vedioUrl;
  }

  let data;

  try {
    data = await download(`${company}/${store}.mp4`);
  } catch {
    data = "";
  }

  return data;
};

export { getImg, getVideo };
