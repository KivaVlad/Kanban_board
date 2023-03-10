import Layout from "./components/layout/Layout";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Board } from "./components/board/Board";

function App() {

  return (
    <Layout>
        <Header />
        <main>
          <Board />
        </main>
        <Footer />
    </Layout>
  );
}

export default App;
