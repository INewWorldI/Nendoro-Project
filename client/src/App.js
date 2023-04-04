import logo from './logo.svg';
import './App.css';

function App() {
  const getData = async () => {
      const res = await fetch(
        'http://localhost:8090/hello=Spring'
      ).then((res) => res.json());
      console.log(res); // 500 개의 데이터 확인 가능
    };
  
    // Mount 시점에 수행
    useEffect(() => {
      getData();
    }, []);
}

export default App;
