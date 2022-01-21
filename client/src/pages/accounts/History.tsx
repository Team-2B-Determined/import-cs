// Edited by Thomas


import {Table} from "react-bootstrap";

interface Row {
    calculationFeature: "Algorithms" | "Computations" | "Conversions" | "Data Structures",
    input: string,
    link: string
}


const rows: Row[] = [
    {calculationFeature: "Computations", input: "(111)2 + (10101011)2", link: "/computations"}, {
        calculationFeature: "Computations",
        input: "(11)2 + (1)2",
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


const History = () => {
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
            {rows.map((e, i) => <tr>
                <td>{i + 1}</td>
                <td>{e.calculationFeature}</td>
                <td>{e.input}</td>
                <td>{e.link}</td>
            </tr>)}
            </tbody>
        </Table>
    </>;
};

export default History;
