import {Accordion, Nav} from "react-bootstrap";


export interface Item {
  name: string,
  href: string,
  body: string,
  image?: string
}

export interface CalculationsListProps {
  title: string,
  items: Item[]
}


const CalculationsList = ({title, items}: CalculationsListProps) => {
  return (
    <>
      <h3>
        {title}
      </h3><br/>

      <Accordion defaultActiveKey="0">

        {items.map((item, i) => (
          <Accordion.Item eventKey={i.toString()}>
            <Accordion.Header>
              {item.image ? <img src={item.image} width="50" height="50"/> : null} {item.name}
            </Accordion.Header>
            <Accordion.Body>
              <Nav.Link href={item.href}>View Here</Nav.Link>
              {item.body}
            </Accordion.Body>
          </Accordion.Item>
        ))}

      </Accordion>
    </>
  );
};

export default CalculationsList;
