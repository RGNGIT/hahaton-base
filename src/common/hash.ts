import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { hashKey } from "../config";

export default (item: string) => {
  const hash = sha256(item);
  return Base64.stringify(hmacSHA512(hash, hashKey));
}