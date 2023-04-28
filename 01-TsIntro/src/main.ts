import './style.css'
import { setupCounter } from './counter.ts'
// import './topics/1-basic-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-functions.ts'
// import './topics/04-homeworkFirst.ts'
// import './topics/05-destructuring.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello World!</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
