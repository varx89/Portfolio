function handler(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        REACT_SERVICE_ID: process.env.REACT_SERVICE_ID,
        REACT_TEMPLATE_ID: process.env.REACT_TEMPLATE_ID,
        REACT_PUBLIC_KEY: process.env.REACT_PUBLIC_KEY

      })
    };
  };
  
  module.exports = { handler };