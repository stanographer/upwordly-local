import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import WidgetContext from '../../context/widget-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const ModalCloseButton = dynamic(() => import('../Controls')
    .then(el => el.ModalCloseButton))
;
const ModalSaveButton = dynamic(() => import('../Controls')
    .then(el => el.ModalSaveButton));

// Dynamically-loaded components.
const SketchPicker = dynamic(() => import('react-color')
    .then(el => el.SketchPicker));

const Color = () => {
  let [bgFg, setBgFg] = useState('fg');

  return (
      <WidgetContext.Consumer>
        {context => (
            <Fragment>
              <form className="w-full max-w-sm">
                <ul className="flex list-style-none mp-start-none">
                  <li className="flex-1 mx-2">
                    <a className={bgFg === 'fg'
                        ? 'text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg'
                        : 'text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4'}
                       href="#"
                       onClick={e => {
                         e.preventDefault();
                         setBgFg('fg');
                       }}>Foreground</a>
                  </li>
                  <li className="flex-1 mx-2">
                    <a className={bgFg === 'bg'
                        ? 'text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg'
                        : 'text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4'}
                       href="#"
                    onClick={e => {
                      e.preventDefault();
                      setBgFg('bg');
                    }}>Background</a>
                  </li>
                </ul>
                <div className={bgFg === 'fg'
                ? 'px-3 pt-4'
                : 'visually-hidden'}>
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Foreground
                  </label>
                  <SketchPicker
                    color={context.settings.color}
                    onChangeComplete={color => context.onChangeSettings('color', color.hex)}
                  />
                </div>
                <div className={bgFg === 'bg'
                ? 'px-3 pt-4'
                : 'visually-hidden'}>
                  <label className="block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Background Color
                  </label>
                  <SketchPicker
                    color={context.settings.backgroundColor}
                    onChangeComplete={color => context.onChangeSettings('backgroundColor', color.hex)}
                  />
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

export default Color;