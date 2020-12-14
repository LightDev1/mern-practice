import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import Loader from './Loader';
import LinksList from '../components/LinksList';

export default function Links() {
    const { loading, request } = useHttp();
    const [links, setLinks] = useState([]);
    const { token } = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Beare ${token}`
            });
            console.log(fetched);
            setLinks(fetched);
        } catch (e) { }
    }, [token, request]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    if (loading) {
        return <Loader />
    }
    return (
        <>
            {!loading && <LinksList links={links} />}
        </>
    )
}