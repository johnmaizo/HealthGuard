import DefaultLayout from '../../layout/DefaultLayout';

const HealthCarePage = () => {
  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-3xl font-bold pb-10">Nearest Hospital Around Cebu City</h2>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18061.782718799568!2d123.88238122063642!3d10.306734702066437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHospital!5e0!3m2!1sen!2sph!4v1717726159624!5m2!1sen!2sph" width={"100%"} height="450" ></iframe>

        {/* style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
      </div>
    </DefaultLayout>
  );
};

export default HealthCarePage;
