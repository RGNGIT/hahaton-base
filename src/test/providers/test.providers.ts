import constants from "src/common/constants";
import { Blob } from "src/cdn/entities/blob.entity";

export const testProviders = [
  {
    provide: constants.BLOB_REPOSIRORY,
    useValue: Blob
  }
];