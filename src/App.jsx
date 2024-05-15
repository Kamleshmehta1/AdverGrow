import useFetchData from './Components/useFetchData';

function App() {
  const { data, isLoading } = useFetchData();
  console.log(isLoading, data);
  return <div>App</div>;
}

export default App;
