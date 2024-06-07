// import DefaultLayout from '../layout/DefaultLayout';
import DefaultLayout from '../../layout/DefaultLayout';



const EmergencyContacts = () => {
  const EmergencyContacts = [
    {
      name: 'Cebu City Emergency or Rescue Number',
      title: '161- ERUF',
      subs: [
        'ERUF Banilad: 233-9300',
        'ERUF Abellana Sports Complex: 255-7287',
      ],
    },
    {
      name: 'Emergency Fire Department',
      title: '160 – Cebu City Fire Department',
      subs: [
        'Fil-Chinese Volunteer Fire Brigade: 254-0200, 254-0300, 0918-909-9785',
        'Mandaue City, Cebu Fire Department: 344-4747, 344-3364',
      ],
    },
    {
      name: 'Cebu City Police Department',
      title: '166 Police Department',
      subs: [
        'Waterfront Police Station: 254-6968',
        'Fuente Osmena Police Station: 256-2194, 255-7350',
        'Mobile Patrol Group: 233-2178',
        'Theft and Robbery Section: 233-0202',
        'SWAT: 235-9666',
        'CITOM Cebu: 253-9211',
      ],
    },
    {
      name: 'Cebu City Hospitals and Clinics',
      subs: [
        'Chong Hua Hospital: 255-8000',
        'Cebu Doctor’s Hospital: 255-5555',
        'Perpetual Succour Hospital: 233-8620',
        'Velez General Hospital: 253-1871',
        'Cebu City Medical Center: 255-7141',
        'Vicente Sotto Memorial Medical Center: 255-1591',
        'Philippine National Red Cross Cebu: 253-4611',
      ],
    },
  ];

  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-4xl font-bold pb-10">Cebu Emergency Hotlines</h2>

        {
            EmergencyContacts.map((emergency, index) => {
                return(
                    <div key={index} className=' my-[2em]'>
                        <h3 className=' text-3xl font-bold'>{emergency.name}</h3>
                        {emergency.title && <p className=' font-semibold py-5'>{emergency.title}</p>}
                        {emergency.subs.map((sub,index) => {
                            return(
                                <p key={index}>{sub}</p>
                            )
                        })}
                    </div>
                )
            })
        }
      </div>
    </DefaultLayout>
  );
};

export default EmergencyContacts;
