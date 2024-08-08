"use client"
import dynamic from 'next/dynamic';


const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false
});

const InstitutesNearYou = () => {
  return (
    <div className="bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Institutes near you</h2>
        <div className=''>
        <MapWithNoSSR className='w-full h-64 rounded-lg overflow-hidden'/>
        </div>
    </div>
  );
};

export default InstitutesNearYou;