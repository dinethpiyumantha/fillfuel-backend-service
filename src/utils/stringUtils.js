module.exports = StringUtils = {
    reqToString: (req) => {
        let header, body;
        header = JSON.stringify(req.header);
        body = JSON.stringify(req.body);
        return `"request": { "header": ${header}, "body": ${body}}`;
    },
    resToString: (res) => {
        return JSON.stringify(res.data);
    }
}