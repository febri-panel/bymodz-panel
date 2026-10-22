exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" })
        };
    }

    const loginData = {
        "antiban_dns": "6be7e6.dns.nextdns.io",
        "changelog": "🌟 Welcome to Bymodz Panel",
        "cntnrUrl": "https://cyrax.info/product/download/3",
        "debug": 1,
        "encryption": "0081fc8175eaa1ac2d4faa5882d16b11",
        "keyId": "1",
        "latestVersion": "5.4.0",
        "myMessage": "JOIN TELEGRAM @Bymoodzz",
        "secret": "9ac8ab2f3c4c3bcd6871b1",
        "secret2": "e8e7f02b10ec774fcee546",
        "status": "success",
        "updateUrl": "https://cyrax.info/product/download/7",
        "userType": 1
    };

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(loginData)
    };
};
