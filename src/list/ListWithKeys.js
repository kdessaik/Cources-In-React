
export default function ListWithKeys1({list}) {
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
