import React from 'react'
import { useEffect, useState } from "react";
import Main from "./Base/Main";
import Loader from "./Loader/Loader";
const Root = () => {
    const [loading, loaded] = useState(true);
    useEffect(() => {
      setTimeout(() => loaded(false), 7000);
    }, []);
    return (loading)?<Loader/>:<Main/>
}

export default Root;
