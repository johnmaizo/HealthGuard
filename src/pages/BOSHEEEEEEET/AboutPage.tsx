import DefaultLayout from '../../layout/DefaultLayout';

const AboutPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-3xl font-bold pb-3">About Quick Alert</h2>

        <p>
          Our Emergency Response System app is designed to provide real-time
          information and resources during natural disasters, ensuring the
          safety and well-being of individuals and communities. With a focus on
          integrating alerts, evacuation routes, shelter locations, and
          emergency contact information, our app aims to empower users with the
          tools and knowledge needed to navigate through challenging situations
          effectively.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
