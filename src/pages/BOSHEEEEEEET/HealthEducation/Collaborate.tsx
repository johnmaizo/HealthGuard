// import Comments from '../../../components/Comments';
import Comments from '../../../components/Comments';

import DefaultLayout from '../../../layout/DefaultLayout';

import data from '../../../data.json';
const Collaborate = () => {
  const currentUser = data.currentUser;
  return (
    <>
      <DefaultLayout>
        <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
          <h2 className=" text-3xl font-bold py-5 pl-4">Collaborate</h2>
          <Comments currentUser={currentUser} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Collaborate;
