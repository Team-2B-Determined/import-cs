import BinaryAddition from "./binary/BinaryAddition";
import Badge from 'react-bootstrap/Badge'
import {useState} from "react";
import {DropdownButton} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";


const Computations = () => {
    const [operation, setOperation] = useState<"+" | "-" | "*" | "/">("+")

    const handleSelect = (e) => {
        setOperation(e)
    }

    const showOperationCode = () => {
        if (operation === "+") {
            return <BinaryAddition/>
        }
    }

    return (
        <div>
            <h1>
                Computations <Badge> New</Badge>
            </h1>
            <div>
                <h5>
                    Performing Binary Computations <Badge> New </Badge>
                </h5>
                <DropdownButton
                    variant="outline-secondary"
                    title="Select"
                    id="segmented-button-dropdown-5"
                    onSelect={handleSelect}
                >

                    <Dropdown.Item eventKey="+"> + (Addition)</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="-"> - (Subtraction)</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="*"> * (Multiplication)</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="/"> / (Division)</Dropdown.Item>

                </DropdownButton>

                {showOperationCode()}
            </div>
        </div>
    );
};

export default Computations;
