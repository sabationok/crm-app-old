import Layout from './Layout/Layout';
// import { useApp } from './contexts/AppContext';
import scss from './App.module.scss';

export const App = () => {
  // const {isLoged} = useApp();
  return (
    <div className={scss.app}>
      <Layout />
    </div>
  );
};
