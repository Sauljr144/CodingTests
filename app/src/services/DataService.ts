//Get
const getData = async () => {
    let result = await fetch("http://127.0.0.1:8000/contacts/")
    let data = await result.json();
    return data;
}


//Post
const postData = async (data:object) => {
try{
        let result = await fetch("http://127.0.0.1:8000/contacts/create",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if(!result.ok){
                const message = `An error has occured: ${result.status}`;
                throw new Error(message);
            }

} catch (error) {    
    console.error(error);
}
}

export {getData, postData}