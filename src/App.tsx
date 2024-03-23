import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(true);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Here is my alert!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Hello World!</Button>
    </div>
  );
}

export default App;
