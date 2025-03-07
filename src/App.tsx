import './App.css'
import Badge from './components/Badge/Badge'

function App() {

  return (
    <>
      <section className='badges'>
        <section className='collection'>
          <Badge></Badge>
          <Badge color='red'>red badge</Badge>
          <Badge color='yellow'>yellow badge</Badge>
          <Badge color='green'>green badge</Badge>
          <Badge color='blue'>blue badge</Badge>
          <Badge color='indigo'>indigo badge</Badge>
          <Badge color='purple'>purple badge</Badge>
          <Badge color='pink'>pink badge</Badge>
        </section>
        <section className='collection'>
          <Badge type='rounded'></Badge>
          <Badge color='red' type='rounded'>red badge</Badge>
          <Badge color='yellow' type='rounded'>yellow badge</Badge>
          <Badge color='green' type='rounded'>green badge</Badge>
          <Badge color='blue' type='rounded'>blue badge</Badge>
          <Badge color='indigo' type='rounded'>indigo badge</Badge>
          <Badge color='purple' type='rounded'>purple badge</Badge>
          <Badge color='pink' type='rounded'>pink badge</Badge>
        </section>
      </section>
    </>
  )
}

export default App
