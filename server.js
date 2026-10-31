const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function getLocalIPs() {
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (let name in ifaces) {
    ifaces[name].forEach(d => {
      if (d.family === 'IPv4' && !d.internal && !d.address.startsWith('169.254')) {
        ips.push({ name, address: d.address });
      }
    });
  }
  return ips;
}

function getBestLocalIP() {
  const ips = getLocalIPs();
  // Prefer 192.168.x.x (typical Home/Wi-Fi router)
  const wifiOrLan = ips.find(i => i.address.startsWith('192.168.'));
  if (wifiOrLan) return wifiOrLan.address;
  // Then 10.x.x.x or 172.16-31.x.x
  const privateIp = ips.find(i => i.address.startsWith('10.') || i.address.startsWith('172.'));
  if (privateIp) return privateIp.address;
  // Fallback to first available
  return ips.length > 0 ? ips[0].address : 'localhost';
}

const server = http.createServer((req, res) => {
  // API to get LAN IP for mobile QR code
  if (req.url === '/api/lan-info') {
    const bestIp = getBestLocalIP();
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ 
      port: PORT, 
      bestIp: bestIp, 
      url: `http://${bestIp}:${PORT}`, 
      ips: getLocalIPs() 
    }));
    return;
  }

  let reqPath = req.url === '/' ? '/index.html' : req.url;
  let filePath = path.join(__dirname, reqPath.split('?')[0]);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    } else {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = getLocalIPs();
  const bestIp = getBestLocalIP();
  console.log('\n======================================================');
  console.log('   🎉 HỆ THỐNG THI THỬ & GAME QUIZ ĐÃ KHỞI ĐỘNG!    ');
  console.log('======================================================');
  console.log(`💻 Mở trên máy tính này:`);
  console.log(`   👉 http://localhost:${PORT}\n`);
  console.log(`📱 Mở trên ĐIỆN THOẠI (kết nối cùng Wi-Fi):`);
  console.log(`   👉 http://${bestIp}:${PORT}`);
  ips.forEach(ip => {
    if (ip.address !== bestIp) {
      console.log(`      hoặc http://${ip.address}:${PORT} (${ip.name})`);
    }
  });
  console.log('======================================================');
  console.log('Nhấn Ctrl+C để dừng server.\n');
});
