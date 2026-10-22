exports.handler = async function(event, context) {
    const homeData = {
        "panel": "bymodz-panel",
        "status": "online",
        "version": "1.0.0",
        "endpoints": {
            "auth": "/cyraxmod/login",
            "health": "/"
        },
        "developer": {
            "name": "Bymodz",
            "telegram": "@Bymoodzz"
        },
        "ts": Math.floor(Date.now() / 1000)
    };

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(homeData)
    };
};
