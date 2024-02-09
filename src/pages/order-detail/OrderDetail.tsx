import { IProduct } from "app-redux/product/interface";
import { fetchOne } from "app-redux/resource/reducer";
import { AppDispatch, RootState } from "app-redux/store";
import { TheContainer, TheIcon } from "components/core-ui";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getResourcePath } from "routers/constant";
import { IItem, ItemCard } from "./ItemCard";
import { Image } from "antd";
import { TheCard } from "components/core-ui/card/TheCard";

export const OrderDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const { detail, loading } = useSelector((state: RootState) => state.products);

  const backTo = getResourcePath("products", "list");

  const cardItems = useMemo<IItem[]>(
    () => [
      { text: "Product ID", value: detail?.id },
      { text: "Title", value: detail?.title },
      { text: "Price", value: detail?.price },
      { text: "Description", value: detail?.description },
      { text: "Category", value: detail?.category },
    ],
    [detail]
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchOne<IProduct>("products")(+id));
    }
  }, [dispatch, id]);

  return (
    <TheContainer title="Product Detail" to={backTo}>
      <div className="grid grid-cols-[auto_400px] gap-8">
        <ItemCard items={cardItems} />
        <TheCard>
          <Image src={detail?.image} />
        </TheCard>
      </div>
    </TheContainer>
  );
};
