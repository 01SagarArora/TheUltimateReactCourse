export function Stats({ items }) {
  const numItems = items.length;

  if (!numItems.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list </em>
      </p>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : ` 💼 You have {numItems} items on your list, and you already packed X ({percentage}%)}`}
      </em>
    </footer>
  );
}
