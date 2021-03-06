// Edited by Thomas


import {Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export interface HistoryRow {
    calculatorFeature: string,
    input: string,
    pathname: string
}

const History = () => {
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const navigate = useNavigate();

    const HistoryRows = () => {
        if (historyRows) {
            return <>
                {historyRows?.reverse().map((e, i) => <tr>
                    <td>{i + 1}</td>
                    <td>{e.calculatorFeature}</td>
                    <td>{e.input}</td>
                    <td><a className="link-primary" style={{cursor: "pointer"}}
                           onClick={() => navigate(e.pathname, {state: {...e}})}>Visit</a></td>
                </tr>)}
            </>
        }
        return <>History is empty. Use a calculator feature to populate it!</>
    }

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Calculation Feature</th>
                <th>Input</th>
                <th>Link</th>
            </tr>
            </thead>
            <tbody>
            <HistoryRows/>
            </tbody>
        </Table>
    </>;
};

export default History;
