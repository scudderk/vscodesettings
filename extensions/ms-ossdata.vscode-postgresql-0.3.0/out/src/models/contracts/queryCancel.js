"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageclient_1 = require("vscode-languageclient");
// Query Cancellation Request
var QueryCancelRequest;
(function (QueryCancelRequest) {
    QueryCancelRequest.type = new vscode_languageclient_1.RequestType('query/cancel');
})(QueryCancelRequest = exports.QueryCancelRequest || (exports.QueryCancelRequest = {}));
class QueryCancelParams {
}
exports.QueryCancelParams = QueryCancelParams;
class QueryCancelResult {
}
exports.QueryCancelResult = QueryCancelResult;

//# sourceMappingURL=queryCancel.js.map
