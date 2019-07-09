import React from 'react';

const JobCreator = ({errors, job, setShortName}) => {
  const errorMessages = errors.map((e, i) => (
      <p className="text-sm text-red-400 mb-4" key={i}>{e}</p>
  ));

  return (
      <form className="w-full lg:w-1/2 px-4">
        <div className="bg-bg2 border-t border-b sm:rounded sm:border shadow">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-green-200 py-4 font-normal text-lg">Start a Job</h3>
            </div>
          </div>
          <div>
            <div className="mb-4 px-8 pt-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="shortname">
                Shortname (required)
              </label>
              <input autoFocus={true}
                     autoComplete="off"
                     spellCheck={false}
                     className={
                       !!errors && errors.length > 0
                         ? 'border-red-500 bg-red-100 shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-red-2100 text-bg font-mono text-md'
                           : 'shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"'
                     }
                     id="shortname"
                     name="shortname"
                     type="shortname"
                     placeholder="(i.e. coachella2019)"
                     value={job.shortName}
                     onChange={e => setShortName(e.target.value)}
                     required
              />
            </div>
            <div className="mb-4 px-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="title">
                Title (optional)
              </label>
              <input autoComplete="off"
                     spellCheck={false}
                     className="shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"
                     id="title"
                     name="title"
                     type="title"
                     placeholder="(i.e. Spreadsheets IRL: The How and Why)"
              />
            </div>
            <div className="mb-4 px-8">
              <label className="block text-grey-darker text-md text-bold mb-2" htmlFor="speakers">
                Speakers (optional)
              </label>
              <input autoComplete="off"
                     spellCheck={false}
                     className="shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"
                     id="speakers"
                     name="speakers"
                     type="speakers"
                     placeholder="(i.e. Christopher Hagan, Stanley Sakai)"
              />
            </div>
            <div className="text-center px-6 py-4">
              {
                !!errors
                    ? errorMessages
                    : ''
              }
              <div className="py-8">
                <div className="mb-4">
                  <button type="submit"
                          className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4">
                    Create Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

  );
};

export default JobCreator;
