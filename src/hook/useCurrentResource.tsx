import { Resource, resource } from "app-redux/resource/interface";
import { useLocation } from "react-router-dom";

export const useCurrentResource = () => {
  try {
    const location = useLocation();

    const resourceName = location.pathname.split("/")[1] as Resource;

    if (!resource.includes(resourceName)) {
      throw new Error("Invalid resource");
    }

    return resourceName;
  } catch (err) {
    throw new Error("Invalid resource");
  }
};
