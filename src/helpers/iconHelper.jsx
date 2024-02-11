import { TbCircuitSwitchClosed } from "react-icons/tb";
import { TbCircuitSwitchOpen } from "react-icons/tb";
import { FaFan } from "react-icons/fa6";

export const ICON_SWITCH_ON = "ICON_SWITCH_ON";
export const ICON_SWITCH_OFF = "ICON_SWITCH_OFF";
export const ICON_FAN = "ICON_FAN";

export const getIconForName = (name) => {
  switch (name) {
    case ICON_SWITCH_ON:
      return <TbCircuitSwitchClosed />;
    case ICON_SWITCH_OFF:
      return <TbCircuitSwitchOpen />;
    case ICON_FAN:
      return <FaFan />;
    default:
      return <TbCircuitSwitchOpen />;
  }
};
