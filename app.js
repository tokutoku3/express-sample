let express = require('express');
let app = express();

// HTTPリクエストを受け取る部分
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// サーバーを起動する部分
let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
