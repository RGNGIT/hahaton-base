import { Position } from "../entities/position.entity";
import constants from "../../common/constants";

export const positionProvider = [
  {
    provide: constants.POSITION_REPOSITORY,
    useValue: Position,
  },
];