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

const Th = styled.th`
    border: 1px solid #734e5f;
    background-color: #ae7d90;
    padding: 4px;
    color:#f4f6f8;
    text-align: left;
`;

export default function Cell(props: CellProps) {
    const { content, header } = props;
    return (header ?
        <Th>{content}</Th> : <Td>{content}</Td>
    )
}
