let config = {};
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  config.url = 'http://localhost:3000';
  config.env = process.env.NODE_ENV;
} else {
  config.url = 'https://dananji.github.io/iiif-react-media-player';
  config.env = process.env.NODE_ENV;
}

export default config;
