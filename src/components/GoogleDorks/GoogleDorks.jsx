import React, {useState} from 'react';

const GoogleDorks = () => {


    const DorkList = 'site:';
    const DorkList2 = 'intitle:';
    const DorkList3 = 'inurl:';

    // const searchDork = DorkList[0];
    const [value, setValue] = useState("");
    const [inurlValue, setInurlValue] = useState("");

    const handleClick = () => {
        const site = value;
        const inurlValueDork = DorkList3 + inurlValue;
        const searchUrl = `https://www.google.com/search?q=${DorkList}` + site + ` ` + inurlValueDork;

        console.log(searchUrl);
        window.open(searchUrl, "_blank");
    };


    return (
        <div>
            <input type="text" placeholder={"site:"} name={"site"} value={value}
                   onChange={(e) => setValue(e.target.value)}/>

            <input type="text" placeholder={"inurl:"} name={"inurl"} value={inurlValue}
                   onChange={(e) => setInurlValue(e.target.value)}/>

            <br/>
            <button className="button-final" onClick={handleClick}> Submit</button>

        </div>
    );
};
export default GoogleDorks;