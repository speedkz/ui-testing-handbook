import { Resource } from "app-redux/resource/interface";
import { generatePath, useNavigate } from "react-router-dom";
import { getResourcePath } from "routers/constant";
import { useCurrentResource } from "./useCurrentResource";

export const useResourceNavigate = (resourceFromProps?: Resource) => {
  const currentResource = useCurrentResource();
  const navigate = useNavigate();

  const resource = resourceFromProps || currentResource;

  const toDetail = (id: number) => {
    const detailPath = getResourcePath(resource, "detail");
    const path = generatePath(detailPath, { id });
    navigate(path);
  };

  const toList = () => {
    const listPath = getResourcePath(resource, "list");
    const path = generatePath(listPath);
    navigate(path);
  };

  return {
    toList,
    toDetail,
  };
};
