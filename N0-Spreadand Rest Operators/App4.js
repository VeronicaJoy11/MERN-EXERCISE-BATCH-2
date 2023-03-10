const List = ({ list }) => (
     <ul> {list.map((item) => (
         <Item key={item.objectID} item={item} />
     ))} 
  </ul> 
);
const Item = ({ item }) => (
     <li> 
        <span> 
            <a href={item.url}>{item.title}</a> 
         </span>
         <span>{item.author}</span> 
         <span>{item.num_comments}</span> 
         <span>{item.points}</span> 
    </li>
 );
