import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")} color="link">
        Hello World!
      </Button>
    </div>
  );
}

export default App;
