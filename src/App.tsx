import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

export function setupIconLibrary(consumerCustomIcons: any = []) {
  library.add(consumerCustomIcons);
}

export default function App() {
  return (
    <div>
      <i className='fa-solid fa-user' />

      <i className='fa-regular fa-user' />

      <i className='fa-light fa-user' />

      <i className='fa-duotone fa-user' />

      <i className='fa-thin fa-user' />

      <i className='fa-sharp fa-solid fa-user' />

      <i className='fa-sharp fa-regular fa-user' />

      <i className='fa-brands fa-github-square' />
    </div>
  );
}
