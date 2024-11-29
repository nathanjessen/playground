import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { useTheme } from '../../state/ThemeContext';

export const ThemeDropdown = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <Listbox value={theme} onChange={setTheme}>
      <div className="relative w-60">
        <Listbox.Button className="btn btn-block">
          <span className="block truncate">{theme}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {themes.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className="relative cursor-pointer select-none py-4 pl-10 pr-4 text-base-content"
                value={item}
                data-theme={item}
              >
                {({ selected }) => (
                  <>
                    <div className="flex justify-between gap-2">
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {item}
                      </span>
                      <div className="flex gap-1">
                        <span className="block h-5 w-3 bg-primary"></span>
                        <span className="block h-5 w-3 bg-secondary"></span>
                        <span className="block h-5 w-3 bg-accent"></span>
                        <span className="block h-5 w-3 bg-neutral"></span>
                      </div>
                    </div>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

// <div className="dropdown dropdown-end">
//   <label tabIndex={0} className="btn btn-ghost rounded-btn">Theme</label>
//   <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
//     {themes.map(item => (
//       <li key={item}>
//         <Button variant='ghost' active={item === theme} onClick={() => setTheme(item)}>{item}</Button>
//       </li>
//     ))}
//   </ul>
// </div>
