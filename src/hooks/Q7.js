import { useState, useMemo } from "react";

function ItemList() {
  const items = [
    { age: 10, name: "Sagar", date: "2023/09/11" },
    { age: 20, name: "Bijoy", date: "2021/06/10" },
    { age: 30, name: "Prodip", date: "2020/06/10" },
  ];
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedItems = useMemo(() => {
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue < bValue) {
        //when first  element should appear before we return negative value (for ascending)
        return sortOrder === "asc" ? -1 : 1;
      } else if (aValue > bValue) {
         //when first  element should appear after we return positive value (for ascending)
        return sortOrder === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    return sortedItems;
  }, [sortBy, sortOrder]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <div>
        Sort By:
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div>
        Sort Order:
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
