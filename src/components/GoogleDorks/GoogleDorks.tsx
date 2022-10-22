import React, {useState, useEffect} from 'react';
import {
    GoogleDorksContainer, PayloadsList, InputBox,DorksList,
} from './GoogleDorksElements'

const GoogleDorks = () => {

    const DorkList = [
        'intitle',
        'inurl',
    ]
    const site = "site"
    const [siteValue, setSiteValue] = useState("");

    const [intitleValue, setIntitleValue] = useState("");

    const DorkListFunc = DorkList.map((dork, index) => {
        return (
            <PayloadsList>
                <DorksList key={index}> {dork}: </DorksList>
                <InputBox type="text" placeholder={dork} name={dork} value={intitleValue}
                    onChange={(e) => setIntitleValue(e.target.value)}/>
            </PayloadsList>
        );
    });


    const handleClick = () => {
        const siteToSearch = siteValue;
        const intitle = DorkList + ":" + intitleValue;

        const searchUrl = `https://www.google.com/search?q=${site}:` + siteToSearch + ` ` + intitle;

        console.log(searchUrl);
        window.open(searchUrl, "_blank");
    };


    return (
        <GoogleDorksContainer>

            <InputBox type="text" placeholder={"site"} name={"site"} value={siteValue}
                      onChange={(e) => setSiteValue(e.target.value)}/>

            {DorkListFunc}

            <br/>
            <button className="button-final" onClick={handleClick}> Submit</button>
        </GoogleDorksContainer>
    );
};
export default GoogleDorks;