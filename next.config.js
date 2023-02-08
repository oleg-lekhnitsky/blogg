// In your server.js or next.config.js file
const httpHeaders = require('http-headers');

module.exports = (req, res) => {
  httpHeaders(res, {
    'Access-Control-Allow-Origin': '*',
  });

  // The rest of your code here...
};

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', "lh3.googleusercontent.com", "yuliananaida.pages.dev", "s3-us-west-2.amazonaws.com", "lh5.googleusercontent.com"]
  },
}

