import React from 'react';
import styled from 'styled-components';

interface CellProps {
    key: string | number;
    content: string;
    header?: boolean;
};

const Td = styled.td`
    border: 1px solid #f4f6f8;
    padding: 4px;
    text-align: left;
`;



export default function Cell(props: CellProps) {
    const { content } = props;
    return (<Td>{content}</Td>
    )
}
