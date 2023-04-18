import React, { useEffect, useState } from "react";
import Art from "./Art";
import axios from "axios";

function ArtBoard() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(
            'https://jsonplaceholder.typicode.com/photos'
            ).then(
                res => {
                    console.log(res.data);
                    setData(res.data);
                }
            ).catch(
                err => setData(err)
            );
    }, []);

    return (
        <div>
            {
                data && data.map(art => (
                    <Art key={art.id} title={art.title} thumbnailUrl={art.thumbnailUrl} /> // ()로 감싸주어야했다....
                ))
            } 
        </div>
    );
}

export default ArtBoard;