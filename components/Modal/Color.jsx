import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import WidgetContext from '../../context/widget-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

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

export default Color;