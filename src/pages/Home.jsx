import { useState } from "react";
import { analisadorLexico } from '../analisadorLexico';
import Header from "../components/Header";
import InputText from "../components/InputText";
import Analise from "../components/Analise";
import InputFile from "../components/InputFile";
import Button from "../components/Button";
import Descricao from "../components/Descricao";


function Home() {
  const [inputText, setInputText] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setFileContent(e.target.result);
      reader.readAsText(file);
    }
  };

  const handleAnalyze = () => {
    const contentToAnalyze = fileContent || inputText;
    try {
      const tokens = analisadorLexico(contentToAnalyze);
      setResult(JSON.stringify(tokens, null, 2));
    } catch (error) {
      setResult('Erro: ' + error.message);
    }
  };

  return (

    <div>
      <Header />
      <Descricao/>
      <div className="p-5 flex">
      <InputText inputText={inputText} setInputText={setInputText}/>
      <InputFile handle={handleFileChange}/>

      </div>
      <div className="text-center">
      <Button handle={handleAnalyze}/>

      </div>
      <Analise result={result}/>
    </div>
  )
}

export default Home