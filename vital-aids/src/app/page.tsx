// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function App() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to /home only if not already on /home
//     if (window.location.pathname !== "/home") {
//       router.replace("/home");
//     }
//   }, []);

//   return null; // Prevents rendering unnecessary content
// }

import VitalAidLayout from '../components/VitalAidLayout';

export default function Home() {
  return <VitalAidLayout />;
}
