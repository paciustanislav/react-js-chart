
import { useEffect, useRef } from 'react'

import Chart from 'chart.js/auto'

function App() {

  const canvas = useRef()

  useEffect( () => {
    new Chart( canvas.current, {
      type: 'line',
      data: {
        labels: [], //[ `qwe 1`, `qwe 2`, `qwe 3`, `qwe 4`, `qwe 5`, `qwe 6`, `qwe 7` ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [], //[ 65, 59, 80, 81, 56, 55, 40 ],
            fill: false,
            borderColor: 'rgb( 75, 192, 192 )',
            tension: 0.1
          },
          {
            label: 'My First Dataset 2',
            data: [], //[ 65, 59, 80, 81, 56, 55, 40 ],
            fill: false,
            borderColor: 'rgb( 75, 192, 192 )',
            tension: 0.1
          }
        ]
      }
    } )
  }, [ canvas ] )

  return (
    <div>
      <canvas ref={canvas}/>
    </div>
  )
}

export default App
