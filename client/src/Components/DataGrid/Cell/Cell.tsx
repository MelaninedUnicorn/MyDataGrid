import React from 'react';
import styled from 'styled-components';

interface CellProps {
    key: string | number;
    content: string;
};

const Td = styled.td`
    border: 1px solid #f4f6f8;
    padding: 16px 20px;
    text-align: center;
    flex:1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;



export default function Cell(props: CellProps) {
    const { content } = props;
    return (<Td>{content}</Td>
    )
}
