import axios from 'axios'

// initiate client connection of prisma and get information here only why we need to create api 
// the code still works on server end only return code is goes on client end

export default async function Todos() {
    const response = await axios.get("http://localhost:3000/api/v1/users");

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