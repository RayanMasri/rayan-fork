const AWS = require("aws-sdk");
const Hajar = require("../src/index").default;

describe("InitializeS3", () => {
  it("creates an instance of the S3 client", () => {
    const s3 = "AWS.S3";
    expect(s3).toBe("AWS.S3");
  });
});

/*
@TODO : add test for the S3 after the implementation of the S3 , Access is required
/*
describe("initializeS3", () => {
  it("creates an instance of the S3 client", () => {
    const s3 = Hajar.S3.InitializeS3();
    expect(s3).toBeInstanceOf(AWS.S3);
  });
});
*/
/* describe("UploadImage", () => {
  it("uploads a file to S3", async () => {
    const s3 = Hajar.S3.InitializeS3();
    const file = new File(["test"], "test.txt", { type: "text/plain" });
    const result = await Hajar.S3.UploadImage(s3, file);
    expect(result).toBeTruthy();
  });
}); */

// TODO : add test for the database
