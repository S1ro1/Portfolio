import React from "react";

import "./VerticalBlock.css";

type VerticalBlockProps = {
  title: string;
  content: JSX.Element;
  img_path: string;
  to_left?: boolean;
};

const VerticalBlock: React.FC<VerticalBlockProps> = ({
  title,
  content,
  img_path,
  to_left,
}) => {
  const block_style = to_left ? "bg-gradient-to-r" : "bg-gradient-to-l";

  return (
    <div className={`vertical-block ${block_style}`}>
      {to_left ? (
        <>
          <div className="img-vertical-block">
            <img src={img_path} alt="img" />
          </div>
          <div className="text-vertical-block">
            <h2>{title}</h2>
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="text-vertical-block">
            <h2>{title}</h2>
            {content}
          </div>
          <div className="img-vertical-block">
            <img src={img_path} alt="img" />
          </div>
        </>
      )}
    </div>
  );
};

export default VerticalBlock;
