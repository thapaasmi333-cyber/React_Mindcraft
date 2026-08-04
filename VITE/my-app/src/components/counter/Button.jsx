// import { useState } from "react";

import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>- </button>
//       <button onClick={() => setCount(0)}>reset</button>
//     </>
//   );
// }

// export default Counter;
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>

      <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
    </>
  );
}
export default Counter;
