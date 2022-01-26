/* Componentes para confugurar as rotas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "components/Navbar"; /* Componente React navBar: função do JS  */
import Listing from 'pages/Listing'; /* Página de listagem de filmes */
import Form from 'pages/Form'; /* Página de formulário */

function App() {
  /* navebar para o HTML */

  return (
    <BrowserRouter> {/* Ininciar configuração da rota para padronizar o Navbar da interface */}
      <Navbar /> {/* A parte de cima da aplicação */}
      <Routes> {/* Configura cada página individualmente */}
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} /> {/* Configura para cada Id de cada Filme */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* Exportando o componente HTML - que na verdade é JSX; ponto chave da aplicaççao React */
