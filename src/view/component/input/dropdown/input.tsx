import { Dropdown } from "react-bootstrap";

export type DropdownItem = {
    itemText: string;
    onClick: (...args: any[]) => void;
};

type DropdownProps = {
    id: string;
    buttonText: string;
    items: DropdownItem[];
};

const DropdownInput = ({ id, buttonText, items }: DropdownProps) => {
    return (
        <Dropdown>
            <Dropdown.Toggle id={id}>{buttonText}</Dropdown.Toggle>
            <Dropdown.Menu>
                {items.map((item: DropdownItem, index: number) => {
                    const { itemText, onClick } = item;
                    const key = `dropdown-${id}-item-${index}`;
                    return (
                        <Dropdown.Item key={key} onClick={onClick}>
                            {itemText}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export { DropdownInput };
