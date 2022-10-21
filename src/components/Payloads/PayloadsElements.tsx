import styled from 'styled-components';
import {AiOutlineCopy} from 'react-icons/ai';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const SyntaxHighlighterDesign = styled(SyntaxHighlighter)`
    min-width: 300px;
`;
export const PayloadsContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    margin-top: 20px;
    width: 500px;
`;

export const CopyToClipboardIcon = styled.div`
    margin: 22px 0 0 5px;
    font-size: 25px;
`;

export const PayloadsCopyToClipboard = styled.div`
    display: flex;

`;

export const PayloadsHeading = styled.h1`
margin: 10px 0 10px 0;
`;

export const CopyToClipboard = styled.h2`
`;
