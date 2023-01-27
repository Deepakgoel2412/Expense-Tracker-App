import { useState, useEffect } from 'react';
const useFetch = (url) => {

    const [data, setData] = useState({
        "body": "deepak",
        "amount": 100,
        "id": 1
    });

    // console.log("data is  ", data)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that resource...")
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log("Now the data is ", data);

                    setData(data);
                })
                .catch(err => {
                    console.log(err.message)
                })
        }, 1000)
    }, [url])

    // console.log("updated data:", data);

    return { data, setData };
}

export default useFetch;