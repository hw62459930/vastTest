const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use('/videojs-vast-vpaid', express.static(__dirname + '/videojs-vast-vpaid'));

app.use(cors()); // CORS 미들웨어를 사용하여 모든 요청에 대해 CORS를 허용

// 주어진 HTML 파일 제공
app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(data);
  });
});

// VAST XML 제공
app.get('/vast.xml', (req, res) => {
  res.sendFile(__dirname + '/vast.xml');
});

// 비디오 파일 제공
app.get('/big_buck_bunny_720p_30mb.mp4', (req, res) => {
  res.sendFile(__dirname + '/big_buck_bunny_720p_30mb.mp4');
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
})

app.get('/sample_ads.mp4', (req, res) => {
  res.sendFile(__dirname + '/sample_ads.mp4');
})

// 서버 시작
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

