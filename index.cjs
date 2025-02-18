const Waline = require('@waline/vercel');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://kiritoeo.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return Waline({
  })(req, res);
};


