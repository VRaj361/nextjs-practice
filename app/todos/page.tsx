import axios from 'axios'

export default async function Todos() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    const data = response.data;
    
    // Added Loading Page by default through loading.tsx file
    return (
        <div>
            {data.id}<br/>
            {data.title}<br/>
            {data.userId}
        </div>
    )
}