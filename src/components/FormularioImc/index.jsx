import React, { useEffect, useState } from 'react';
import styles from './FormularioImc.module.css'

const FormularioImc = () => {
    const [estadoOK, setEstadoOK] = useState(false);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    
    useEffect(() => {
        if (altura > 0 && peso > 0) {
            setEstadoOK(true);
            let calculo =  peso / (altura * altura);
            setImc(Math.abs(calculo.toFixed(2)))
        } else {
            setEstadoOK(false);
        }

    }, [altura, peso]);


    return (
        <div className="container">
            <h1>Calculadora IMC</h1>

            <form action="">
                <div className={styles.row}>
                    <div>
                        <input className={styles.input} type="number" step="0.1" placeholder="Altura (ex.: 1.50)" 
                            onBlur={({target}) => setAltura(target.value)}    
                        />
                    </div>
                    <div>
                        <input className={styles.input} type="number" placeholder="Peso (ex.: 70.4)" 
                            onMouseOut={({target}) => setPeso(target.value)} 
                        />
                    </div>
                </div>
            </form>


        {
            estadoOK && (
                <>
                    <p className={styles.resultadoImc}>Seu IMC é de: {imc}</p>
                    <table className={styles.table}>
                        <caption className={styles.tableTitle}>VEJA A INTERPRETAÇÃO DO IMC</caption>
                        <thead>
                            <tr>
                                <th>IMC</th>
                                <th>Classificação</th>
                                <th>Obsidade (grau)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MENOR QUE 18,5</td>
                                <td>MAGREZA</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>ENTRE 18,5 E 24,9</td>
                                <td>NORMAL</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>ENTRE 25,0 E 29,9</td>
                                <td>SOBREPESO</td>
                                <td>I</td>
                            </tr>
                            <tr>
                                <td>ENTRE 30,0 E 39,9</td>
                                <td>OBESIDADE</td>
                                <td>II</td>
                            </tr>
                            <tr>
                                <td>MAIOR QUE 40,0</td>
                                <td>OBESIDADE GRAVE</td>
                                <td>III</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )
        }
        </div>
    )
}

export default FormularioImc;