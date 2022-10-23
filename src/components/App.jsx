import Layout from './Layout/Layout';
// import { useApp } from './contexts/AppContext';
import css from './App.module.css';

export const App = () => {
  // const {isLoged} = useApp();
  return (
    <div className={css.app}>
      <Layout />
    </div>
  );
};
