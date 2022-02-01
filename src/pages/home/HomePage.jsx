import { useContext } from 'react';
import { AppBar } from '../../components/appbar/AppBar';
import { Menu } from '../../components/menu/Menu';
import { SearchResult } from '../../components/searchresults/SearchResult';
import { Spinner } from '../../components/spinner/Spinner';
import { SearchContext } from '../../context/searchContext/SearchContext';

export const HomePage = () => {
  
  const { state } = useContext(SearchContext);


  return (
    <>
      <AppBar />

      {state.loading && <Spinner w={'100px'} h={'100px'}/>}

      {state.results.length === 0 ? (
        <Menu />
      ) : (
        <SearchResult />
      )}
    </>
  );
}