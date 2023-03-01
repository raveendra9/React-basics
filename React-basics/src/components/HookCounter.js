import React,{useState, useEffect} from 'react'

 function HookCounter() {
    const[count,setCount] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            response => response.json()
        ).then(json => setCount(json))
    }, [])
    console.log("json",count)
    // function filterData() {

    // }

  return (
    <>
      <table>
      {/* <button onClick={() => setCount(Count + 1)}>Count {Count}</button> */}
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        </tr>
        {count.filter(item => (item.userId===2 || item.userId===3)).map(items => <tr key={items.id}><td>{items.id}</td><td>{items.userId}</td><td>{items.title}</td></tr>)}
      </table>
    </>
  )
}
export default HookCounter