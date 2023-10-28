import constants from "src/common/constants";
import { Blob } from "src/cdn/entities/blob.entity";
import { Test } from "../entities/test.entity";

export const testProviders = [
  {
    provide: constants.BLOB_REPOSIRORY,
    useValue: Blob
  },
  {
    provide: constants.TEST_REPOSITORY,
    useValue: Test
  },
];