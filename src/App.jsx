import useFetchData from './Components/useFetchData';
import Routes from './routes/Routes';

function App() {
  const { data, isLoading } = useFetchData();
  console.log(isLoading, data);
  return <Routes />;
}

export default App;
