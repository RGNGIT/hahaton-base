import { Inject, Injectable } from '@nestjs/common';
import * as fs from "fs";
import hash from 'src/common/hash';
import constants from 'src/common/constants';
import FtpService from './ftp';

function escapeSlashes(key: string): string {
  let temp = "";
  const toEscape = ['/', '\\'];
  for (const i of key) {
    if (!toEscape.includes(i)) {
      temp += i;
    }
  }
  return temp;
}

@Injectable()
export class CdnService {
  constructor() {
    if (!fs.existsSync(constants.CDN_STORAGE)) {
      fs.mkdirSync(constants.CDN_STORAGE);
    }
  }

  async writeFile(content): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const salt = escapeSlashes(
          hash(content.name + Math.floor(Math.random() * 5928))
        );
        fs.writeFile(constants.CDN_STORAGE + "/" + salt, content, async (err) => {
          if (!err) {
            await new FtpService().upload(salt);
            resolve({ salt });
          } else {
            reject(err);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  async readFile(key): Promise<any | Buffer> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!fs.existsSync(constants.CDN_STORAGE + "/" + key)) {
          console.log(`Не нашел файлика (${key}) в локальном кэше. Подгружаю с сервера...`);
          await new FtpService().read(key);
        }
        fs.readFile(constants.CDN_STORAGE + "/" + key, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}