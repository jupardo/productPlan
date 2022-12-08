import { Period } from "../../types/Period";

type PeriodActions = periodInitializer | periodAdd | periodRemove;

type periodInitializer = {
  action: "initialize";
  payload: Period[];
};

type periodAdd = {
  action: "add";
  payload: Period;
};

type periodRemove = {
  action: "remove";
  payload: Period;
};

export default PeriodActions;
