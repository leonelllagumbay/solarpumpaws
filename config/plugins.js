module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION', 'ap-southeast-1'),
        params: {
          Bucket: env('AWS_BUCKET_NAME', 'solar-project-name-images'),
        },
      },
    },
  }
});