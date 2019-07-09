import React, { Fragment } from 'react';
import WidgetContext from '../../context/widget-context';
import dynamic from 'next/dynamic';

const ModalCloseButton = dynamic(() => import('../Controls')
    .then(el => el.ModalCloseButton))
;
const ModalSaveButton = dynamic(() => import('../Controls')
    .then(el => el.ModalSaveButton));

const Text = () => {
  return (
      <WidgetContext.Consumer>
        {context => (
            <Fragment>
              <form className="w-full max-w-sm">
                <div>
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Line Height
                  </label>
                  <input
                      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0"
                      id="grid-last-name"
                      type="text"
                      name="lineHeight"
                      value={context.settings.lineHeight || ''}
                      onChange={e => {
                        e.preventDefault();
                        context.onChangeSettings('lineHeight', e.target.value);
                      }}
                  />
                </div>
                <div className="mt-4">
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Horizontal Padding
                  </label>
                  <input
                      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0"
                      id="grid-last-name"
                      type="text"
                      name="lineHeight"
                      value={context.settings.paddingX || ''}
                      onChange={e => {
                        e.preventDefault();
                        context.onChangeSettings('paddingX', e.target.value);
                      }}
                  />
                </div>
                <div className="mt-4">
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Vertical Padding
                  </label><input
                    className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0"
                    id="grid-last-name"
                    type="text"
                    name="lineHeight"
                    value={context.settings.paddingY || ''}
                    onChange={e => {
                      e.preventDefault();
                      context.onChangeSettings('paddingY', e.target.value);
                    }}
                />
                </div>
                <ModalSaveButton
                    context={context}
                    label="Save Text Settings"
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

export default Text;