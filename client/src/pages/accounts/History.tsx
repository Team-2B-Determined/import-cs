// Edited by Thomas


import {Table} from "react-bootstrap";

export interface HistoryRow {
    calculationFeature: "Algorithms" | "Computations" | "Conversions" | "Data Structures",
    input: string,
    link: string
}


const rows: HistoryRow[] = [
    {calculationFeature: "Computations", input: "(111)2 + (10101011)2", link: "/computations"}, {
        calculationFeature: "Computations",
        input: "(11)21)2",
        link: "/computations"
    }, {
        calculationFeature: "Algorithms",
        input: "SelectionSort([222,9719,719,17,91,1621,910,5])",
        link: "/algorithms"
    }, {
        calculationFeature: "Data Structures",
        input: "Linked List([222,9719,719,17,91,1621,910,5])",
        link: "/datastructures"
    }, {calculationFeature: "Conversions", input: "(1101)2 =>()10", link: "/conversions"}
]


const History = ({historyRows}:{historyRows:HistoryRow[]|undefined}) => {
    const HistoryRows = () => {
        if (historyRows) {
          return <>
              {historyRows?.map((e, i) => <tr>
                  <td>{i + 1}</td>
                  <td>{e.calculationFeature}</td>
                  <td>{e.input}</td>
                  <td>{e.link}</td>
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
