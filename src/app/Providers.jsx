 
"use client";

import { ThemeProvider} from 'next-themes'
export default function Providers({children}) {
  return (
    <div><ThemeProvider enableSystem={true} attribute='class' >
      <div>{children}</div>
        
        </ThemeProvider></div>
  )
}
