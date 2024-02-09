import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import ClipLoader from "react-spinners/ClipLoader";
import { COLORS } from "theme";

interface IProps {
  loading: boolean;
}

export const TheLoading = (props: IProps) => {
  return (
    <div className="h-screen w-screen grid place-content-center">
      <ClipLoader
        {...props}
        color={COLORS.PRIMARY}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export const TheLoadingRoute = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <ClipLoader
      loading={loading}
      size={35}
      color={COLORS.PRIMARY}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
