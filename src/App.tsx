import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Paris", "London", "New York", "San Francisco", "Denver"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
