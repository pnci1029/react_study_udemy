import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Results({input}) {
    const calculate = calculateInvestmentResults(input);
    // console.log({input})
    console.log(calculate)
    return (
        <>
            <table id="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>투자 금액</th>
                    <th>이자</th>
                    <th>연 이자</th>
                    <th>투하 자본</th>
                </tr>
                </thead>
            <tbody>
            {calculate.map(yearData => {
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{yearData.annualInvestment}</td>
                    <td>{yearData.interest}</td>
                </tr>
            })}
            </tbody>
            </table>

        </>
    );
};