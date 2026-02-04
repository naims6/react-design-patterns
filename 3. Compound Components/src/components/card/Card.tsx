import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        width: 300,
        margin: 10,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <h3>{children}</h3>
    </div>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: 10 }}>{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 10, borderTop: "1px solid #ccc" }}>{children}</div>
  );
}

function CardImage({ src }: { src: string }) {
  return (
    <img src={src} style={{ width: "100%", display: "block" }} alt="card" />
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
