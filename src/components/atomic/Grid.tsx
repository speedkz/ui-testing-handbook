import { Card } from "./Card";
import "./grid.css";

export const Grid = ({ items = [] }) => {
  return (
    <div className="grid-container">
      {items.map((i) => (
        <Card className="flex justify-center items-center" key={i}>
          {i}
        </Card>
      ))}
    </div>
  );
};

export const GridArea = () => {
  return (
    <div className="grid-container">
      <Card className="header">Header</Card>
      <Card className="title">Title</Card>
      <Card className="sidebar">Sidebar</Card>
      <Card className="main">Main</Card>
      <Card className="footer">Footer</Card>
      <div className="popup">Popup</div>
    </div>
  );
};
