import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Todo} from "./components/todo/Todo.tsx";
import Layout from "./components/layout/Layout.tsx";

function App() {

  return (
    <>
        <Layout>
            <Todo/>
        </Layout>

    </>
  )
}

export default App
