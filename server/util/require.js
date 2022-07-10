const req = {
    //get请求封装
    get: (link, data, callback) => {
        http.get(link, data, (req, res) => {
            var html = '';
            req.on('data', data => {
                html += data;
            });
            req.on('end', () => {
                callback(html);
            });
        });
    },
    //post 请求封装
    post: (link, data, callback) => {
       //var postData = JSON.stringify(data)
        var postData = queryString.stringify(data);
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Content-Length': Buffer.byteLength(postData)
            }
        }
        var req = http.request(link, options, (res) => {
            res.setEncoding('utf-8');
            var html = '';
            res.on('data', chun => {
                html += chun;
            });

            res.on('end', () => {
                callback(html);
            });
        });
        req.write(postData);
        req.end();
    }
}

module.exports = req;