import React from "react";

export const PlaceholderCards = () => {
  return (
    <>
      {Array.apply(null, { length: 9 } as any).map((e, i) => (
        <div className="placeholder-card" key={i}>
          <div />
          <div />
        </div>
      ))}
    </>
  );
};
