// "use client"

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0)
//   console.log("Hey I'm Abhii")
//   return (
//     <div>
//       I am a components {count}
//       <br />
//       <button onClick={() => setCount(count+1)}> tap  </button>
//       <br />
//       I am a components {count}
//     </div>
//   );
// }

"use client"
import Navbar from "@/components/navbar";
export default function Home() {

  console.log("I am server-side messege")
  return (
    <div>
      <Navbar />
      I am a components
      <br />
      I am a components
    </div>
  );
}
