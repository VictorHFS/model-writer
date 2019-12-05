import { InterfaceWriteConfiguration } from "./interface-write-configuration";
import request = require("request");

export function readResource(resource: string, callback: (config: InterfaceWriteConfiguration) => void): void {
    request(resource, {json: true}, requestHandler(callback));
}

function requestHandler(callback): request.RequestCallback {
    return (err, res, body) => {
        const _res = _requestHandler(err, res, body);
        callback(_res);
    };
}

function _requestHandler(err, res, body): Response {
    if (err) {
        throw err;
    }
    return res;
}