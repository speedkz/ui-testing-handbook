export interface CardArgs {
  image?: any;
  action?: any;
  headerIcon?: any;
  headerInfo?: string;
  headerTitle?: string;
  content?: string;
  width?: number | string;
  children: React.ReactNode;
}

export const Card = (props: CardArgs) => {
  const {
    image,
    headerIcon,
    headerInfo,
    headerTitle,
    content,
    width = 495,
    action,
    children,
  } = props;
  return (
    <div className="base-card relative" style={{ width }}>
      {children}
      {action && (
        <div className="cursor-pointer absolute -top-2 right-0">{action}</div>
      )}
      {(headerIcon || headerInfo) && (
        <div className="flex items-center gap-2">
          <div>{headerIcon}</div>
          <div className="text-primary-text-light text-xs">{headerInfo}</div>
        </div>
      )}
      {(headerTitle || content) && (
        <div className="flex py-4 gap-4">
          <div className="grow min-w-[70px]">{image}</div>
          <div>
            <div className="text-[18px] font-bold leading-[25px] text-primary-text mb-4">
              {headerTitle}
            </div>
            <div
              className=" text-primary-text-dark text-sm"
              dangerouslySetInnerHTML={{ __html: content || "" }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
