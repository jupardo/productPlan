import { Period } from "../../types/Period";
import PeriodActions from "./periodsActions";

export default function periodsReducer(
  state: Period[],
  message: PeriodActions
): Period[] {
  const { action, payload } = message;
  switch (action) {
    case "initialize":
      return payload;
    default:
      return [];
  }
}
