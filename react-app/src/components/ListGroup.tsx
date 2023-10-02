import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelecteItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelecteItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item found </p>}
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelecteItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
