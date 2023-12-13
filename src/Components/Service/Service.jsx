import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceEachCard from './ServiceEachCard';

const Service = () => {
    const [service, setService] = useState()
    const {id} = useParams()
    // console.log(id);

    const services = useLoaderData()
    // console.log(services);
    useEffect(()=>{
        const findService = services?.find(service=>service.id == id)
        // console.log(findService);
        setService(findService)
    },[id,services])

    console.log(service);
    return (
        <div>
            <ServiceEachCard service={service}></ServiceEachCard>
        </div>
    );
};

export default Service;