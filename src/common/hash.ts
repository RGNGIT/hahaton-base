import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { hashKey } from "../config";

export default (item: string) => {
  // TODO: Починить хеш
  return item;
}