module.exports = (req, res) => {
  const url = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  // Vercel routes /api/* to this function. Return a harmless response for API
  // paths that are only available in the local development server.
  if (pathname === '/api/lan-info') {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ port: 3000, bestIp: null, url: null, ips: [] });
  }

  // The quiz is a static app. Redirect requests reaching this function back
  // to Vercel's static file serving at the project root.
  res.setHeader('Location', pathname === '/' ? '/index.html' : pathname);
  return res.status(308).end();
};
