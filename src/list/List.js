 const list = [
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }
    
  ];
  
  export  function ListJsx() {
    return (
      <>
        <ul>
        <h1>Here is our list With JSX</h1>
        {list.map(function(itemObj) {
          return <li key={itemObj.objectID}><a href ={itemObj.url} >{itemObj.title} </a></li>
        })}
        </ul>
      </>
    )
  }
  export default function ListWithKeys() {
    return (
      <>
        <ul>
        <h1>Here is our list With Keys</h1>
        {list.map(function(itemObj) {
          return <li key={itemObj.objectID}>
        <span>
          <a href={itemObj.url}>{itemObj.title} </a>
          </span>
          <span>{itemObj.author}</span>
          <span>{itemObj.num_comments}</span>
          <span>{itemObj.points}</span>
                 </li>
        })}
        </ul>
      </>
    )
  }