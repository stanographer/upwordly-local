import React, { Fragment } from 'react';
import WidgetContext from '../../context/widget-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const Font = () => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <Fragment>
              <form className="w-full max-w-sm">
                <div>
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Size
                  </label>
                  <input
                      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0"
                      id="grid-last-name"
                      type="text"
                      name="fontSize"
                      value={context.settings.fontSize || ''}
                      onChange={e => {
                        e.preventDefault();
                        context.onChangeSettings('fontSize', e.target.value);
                      }}
                  />
                </div>
                <div className="flex flex-grow-1 my-8">
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Style
                  </label>
                </div>
                <button
                    className="border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-6 mx-0 px-3 py-2 font-apercu"
                    type="button"
                    onClick={() => context.setSettings()}>
                  <FontAwesomeIcon icon={faSave} className="pr-2" />
                  Save Settings
                </button>
              </form>
            </Fragment>
        )}
      </WidgetContext.Consumer>
  );
};

export default Font;
