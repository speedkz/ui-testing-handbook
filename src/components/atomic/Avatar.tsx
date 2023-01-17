import User from "assets/images/atomic/User.svg";
import { useState } from "react";
export interface IAvatar {
  image?: any;
  rounded?: string;
  circle?: boolean;
  name?: string;
  size?: "tiny" | "small" | "normal" | "large";
}

export interface IAvatarGroup {
  items?: IAvatar[];
}

export const Avatar = (props: IAvatar & IAvatarGroup) => {
  const { rounded, circle, image, name, size = "small", items = [] } = props;
  const [error, setError] = useState(false);
  const sizes = {
    tiny: "w-6 h-6",
    small: "w-10 h-10",
    normal: "w-20 h-20",
    large: "w-[120px] h-[120px]",
  };
  return (
    <div
      className={`flex items-center justify-center bg-secondary-background ${rounded} ${
        circle || items.length > 0 ? "rounded-full overflow-hidden" : ""
      } ${sizes[size]}`}
    >
      {Boolean(items.length) ? (
        <div
          className={`w-full h-full grid gap-1 relative ${
            items.length > 1 ? "grid-cols-2" : ""
          } ${items.length > 2 ? "grid-rows-2" : ""}`}
        >
          <GroupAvatar items={items} error={error} setError={setError} />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <SingleAvatar {...props} error={error} setError={setError} />
        </div>
      )}
    </div>
  );
};

export const GroupAvatar = ({
  items,
  error,
  setError,
}: {
  items: IAvatar[];
  error;
  setError;
}) => {
  const maxItems = 4;
  return (
    <>
      {items.map((item, index) => (
        <>
          {index < maxItems && (
            <div
              className={`${
                items.length === maxItems - 1 && index === 0
                  ? "row-span-2 "
                  : ""
              }`}
            >
              <SingleAvatar
                key={index}
                {...item}
                error={error}
                setError={setError}
              />
            </div>
          )}
          {index >= maxItems && (
            <div
              className="absolute"
              style={{
                inset: "50% 0 0 50%",
                backgroundColor: "rgb(52, 52, 52, 0.5)",
              }}
            >
              <span className="text-white absolute top-[23.5%] right-[40%]">+{items.length - maxItems}</span>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export const SingleAvatar = (props) => {
  const { image, setError, size, name, error } = props;
  return (
    <>
      {image && !error ? (
        <ImageAvatar image={image} setError={setError} />
      ) : name ? (
        <TextAvatar name={name} size={size} />
      ) : (
        <DefaultAvatar />
      )}
    </>
  );
};

export const ImageAvatar = ({ image, setError }) => {
  return (
    <img
      className="w-full h-full object-cover"
      src={image}
      alt="avatar"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        setError(true);
      }}
    />
  );
};

export const DefaultAvatar = () => {
  return <img src={User} alt="user" className="w-3/4" />;
};

export const TextAvatar = ({ name = "", size = "small" }) => {
  const textStyles = {
    tiny: "text-xs",
    small: "text-sm",
    normal: "text-[26px]",
    large: "font-bold text-[42px]",
  };
  return (
    <div className={`${textStyles[size]} text-primary`}>
      {name.substring(0, 2)}
    </div>
  );
};
