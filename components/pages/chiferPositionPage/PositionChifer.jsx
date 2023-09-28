import { useState } from "react"
import "./PosStyle.css"
import {tableTranspositionCipher, tableTranspositionCipherDecrypt} from './script/PositionScript'

function PositionChifer(){
    const [inputValue, setInputValue] = useState('')
    const [keyValue, setKeyValue] = useState('')
    const [result, setResult] = useState('');
    const [showElements, setShowElements] = useState(false);


    function Encrypt(){
        const result = tableTranspositionCipher(+keyValue,inputValue)
        setResult(result);
        setShowElements(!showElements)
    }
    function Decrypt(){
        const result = tableTranspositionCipherDecrypt(+keyValue,inputValue)
        setResult(result);
        setShowElements(!showElements)
    }
    return(
        <div>
            <div className="info-place">
                <p>В качестве входной строки - <span>любое слово или слова</span></p>
                <p>В качестве ключа - <span>цифра</span> номинально не превышающая количество символов в строке</p>
            </div>
            <div className="example-place">
                <p>Входная строка: HelloWorldThisIsALongString</p>
                <p>Ключ: 5</p>
                <p>Результат: HWTsgneohASglriLtllsorodIni</p>
            </div>
            <div className="form-chifer">
                <input type="text" onChange={(e)=> setInputValue(e.target.value)} placeholder="Ваше сообщение"/>
                <input type="number" onChange={(e)=> setKeyValue(e.target.value)} placeholder="Ключ"/>
                <button onClick={Encrypt}>Зашифровать</button>
                <button onClick={Decrypt}>Расшифровать</button>
            </div>
            {showElements && (
            <div className="result-elm">
                <p>Результат: <span>{result}</span></p>
                <p>Входная строка: <span>{inputValue}</span></p>
                <p>Ключ: <span>{keyValue}</span></p>
            </div>
            )}
        </div>
        
    )
}

export default PositionChifer