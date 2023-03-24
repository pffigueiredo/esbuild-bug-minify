import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

export function setupIconLibrary(consumerCustomIcons: any = []) {
  library.add(consumerCustomIcons);
}

export default function App() {
  return <div>Hello World</div>;
}
