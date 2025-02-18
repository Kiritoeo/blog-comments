const Waline = require('@waline/vercel');

// 创建符合 ThinkJS 规范的中间件函数
const createWalineMiddleware = Waline({
  plugins: [],
  async postSave(comment) {
    // 原有逻辑（如有）
  },
});

// 包装中间件以添加 CORS 头
module.exports = async (req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', 'https://kiritoeo.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 处理 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 调用 Waline 中间件
  return createWalineMiddleware(req, res);
};
