import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';

const Home = () => {

    const apps = useLoaderData();
    // console.log(apps);

    const featuredApps = apps.slice(0,8)

    return (
      <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {apps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    );
};

export default Home;