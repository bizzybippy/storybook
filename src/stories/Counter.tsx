import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="value">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  );
}
