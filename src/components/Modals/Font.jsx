import React, { Fragment } from 'react';
import WidgetContext from '../../providers/WidgetContext';
import dynamic from 'next/dynamic';

const ModalCloseButton = dynamic(() => import('../General')
    .then(el => el.ModalCloseButton))
;
const ModalSaveButton = dynamic(() => import('../General')
    .then(el => el.ModalSaveButton));

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
                <ModalSaveButton
                    context={context}
                    label="Save Font Settings"
                />
                <ModalCloseButton
                    context={context}
                    label="Close"
                />
              </form>
            </Fragment>
        )}
      </WidgetContext.Consumer>
  );
};

export default Font;
