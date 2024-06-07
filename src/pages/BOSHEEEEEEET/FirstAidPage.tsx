import DefaultLayout from '../../layout/DefaultLayout';

const FirstAidPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-3xl font-bold pb-10">First Aid Tips</h2>

        <span className="bullet-red">
          <span className=' text-3xl font-bold'>1</span>{' '}
          <p>
            CHECK the scene for safety, form an initial impression, obtain
            consent, and use personal protective equipment (PPE)
          </p>
        </span>
        <hr style={{ width: '100%' }} />

        <span>
          {' '}
          2
          <p>
            If the person appears unresponsive, CHECK for responsiveness,
            breathing, life-threatening bleeding or other life-threatening
            conditions using shout-tap-shout
          </p>
        </span>
        <p>Note: CHECK for no more than 10 seconds</p>
        <hr style={{ width: '100%' }} />
        <span>
          3A{' '}
          <p>
            If the person does not respond, responds but is not fully awake, is
            not breathing or is only gasping, or has life-threatening bleeding
            or another obvious life-threatening condition, CALL 9-1-1 and get
            equipment, or tell someone to do so. Then, give CARE based on the
            condition found and your level of training and continue your check
            to determine if additional care is needed
          </p>
        </span>
        <p className=" ml-[75px]">
          <strong>Note:</strong> For a person who is unresponsive and not
          breathing,{' '}
          <a href="https://www.redcross.org/take-a-className/cpr/performing-cpr/cpr-steps">
            <strong>start CPR</strong>
          </a>{' '}
          and{' '}
          <a href="https://www.redcross.org/take-a-className/aed/using-an-aed/aed-steps">
            <strong>use an AED</strong>
          </a>{' '}
          immediately
        </p>
        <hr style={{ width: '100%' }} />
        <span>
          {' '}
          3B{' '}
          <p>
            If the person is responsive or responds to stimulation and is fully
            awake and does not appear to have a life-threatening condition:
          </p>
          <ul style={{ clear: 'both', paddingLeft: '3.5em' }}>
            <li>
              Interview the person (or bystanders, if necessary), ask questions
              about signs and symptoms, allergies, and medications and medical
              conditions (SAM)
            </li>
            <li>
              Do a focused check based on what the person told you, how the
              person is acting and what you see
            </li>
          </ul>
        </span>
        <span>
          {' '}
          <p>
            <strong>Note: </strong> Do not ask the person to move if you suspect
            a head, neck or spinal injury. Do not ask the person to move any
            area of the body that causes discomfort or pain
          </p>
        </span>
        <span>
          <strong>Note: </strong> As you check the person, take note of any
          medical identification tags
        </span>
      </div>
    </DefaultLayout>
  );
};

export default FirstAidPage;
