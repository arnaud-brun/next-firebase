export default ({ lastUpdate, light }) => {
  let clockStyle = {
    padding: '15px',
    display: 'inline-block',
    color: '#82FA58',
    font: '50px menlo, monaco, monospace',
    backgroundColor: '#000',
  }

  if (light) {
    clockStyle.backgroundColor = '#999'
  }

  return (
    <div style={clockStyle}>
      {format(new Date(lastUpdate))}
    </div>
  )
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n
