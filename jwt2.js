const { connect: tlsConnect } = require("tls");
const { request: httpsRequest } = require("https");
const { get: requestGet } = require("request");

const connection = tlsConnect(
  443,
  "www.abcd.com",
  {
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
  },
  () => {}
);

const req = httpsRequest(
  {
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
  },
  (res) => {}
);

const socket = requestGet({
  secureProtocol: "TLSv1_method", // insecure version
  minVersion: "TLSv1.1", // insecure version
  maxVersion: "TLSv1.2",
});
