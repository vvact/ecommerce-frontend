import { useEffect } from "react";
import { api } from "@/lib/api"; // make sure the path matches your Axios instance

export default function TestAPI() {
  useEffect(() => {
    api.get("/categories/")
      .then(res => console.log("API response:", res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return <div>Check your browser console for API response</div>;
}
