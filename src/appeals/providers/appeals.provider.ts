import constants from "../../common/constants";
import { Appeal } from "../entities/appeal.entity";

export const appealProvider = [
  {
    provide: constants.APPEALS_REPOSITORY,
    useValue: Appeal,
  },
];