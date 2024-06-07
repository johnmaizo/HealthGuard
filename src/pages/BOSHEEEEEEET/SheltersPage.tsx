import DefaultLayout from "../../layout/DefaultLayout";

const SheltersPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-3xl font-bold pb-3">Shelters</h2>

        <iframe src="https://www.google.com/maps/d/embed?mid=1xxzYCl6HdGEoV3PNWJthZTuhnfs&ehbc=2E312F" className=" w-full h-[50em]"></iframe>
      </div>
    </DefaultLayout>
  );
};

export default SheltersPage;
