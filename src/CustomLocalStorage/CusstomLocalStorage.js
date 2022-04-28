import { useState, useEffect } from 'react';
export default function CustomLocalStorage() {
    const [searchTermProp, setSearchTermProp] = useState(
        localStorage.getItem('search') || ' '
    )
    useEffect(() => {
        localStorage.getItem('search', searchTermProp)
    }, [searchTermProp])
    return [searchTermProp, setSearchTermProp]
}