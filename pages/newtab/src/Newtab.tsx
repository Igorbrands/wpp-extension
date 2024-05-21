import {
	exampleThemeStorage,
	useStorageSuspense,
	withErrorBoundary,
	withSuspense
} from '@chrome-extension-boilerplate/shared';
import '@src/Newtab.css';
import '@src/Newtab.scss';
import { ComponentPropsWithoutRef } from 'react';
import Contacts from './components/Contacts.tsx';

const Newtab = () => {
  const theme = useStorageSuspense(exampleThemeStorage);

  return (
    <div className="App" style={{ backgroundColor: theme === 'light' ? '#eee' : '#222' }}>
      <header className="App-header" style={{ color: theme === 'light' ? '#222' : '#eee' }}>
        Contatos da google account:
teesste
		<Contacts />


        <ToggleButton>Add contact +</ToggleButton>
      </header>
    </div>
  );
};

const ToggleButton = (props: ComponentPropsWithoutRef<'button'>) => {
  const theme = useStorageSuspense(exampleThemeStorage);
  return (
    <button
      className={
        props.className +
        ' ' +
        'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 ' +
        (theme === 'light' ? 'bg-white text-black' : 'bg-black text-white')
      }
      onClick={exampleThemeStorage.toggle}>
      {props.children}
    </button>
  );
};

export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);
