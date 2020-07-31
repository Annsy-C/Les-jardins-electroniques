import React, { useEffect, useState } from "react";
import { Box, BoxContent, BoxTitle, BoxParagraph, BoxImage} from "./box";

function MeteoBox () {
    const [icon, setIcon] = useState("01d");
    const [temperature, setTemperature] = useState(0);
    const [meteo, setMeteo] = useState("neutre");
    const [vitesseVent, setVitesseVent] = useState(0);
    
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=paris&lang=fr&units=metric&appid=a1a0d3aecb142764bde560d119a3bde4')
            .then(res => res.json())
            .then(data => {
                setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
                setTemperature(data.main.temp);
                setMeteo(data.weather[0].description);
                setVitesseVent(data.wind.speed);
            });
    }, [temperature, setTemperature]);

    return (
        <Box height="">
            <BoxContent>
                <BoxTitle title="Météo Paris" />
                <BoxImage src={icon} alt="icone météo" size="is-128x128"/>
            </BoxContent>
            <BoxContent>
                <Box height="">
                    <BoxParagraph>
                        <p>Température : {Math.round(temperature)} °C</p>
                    </BoxParagraph>
                </Box>
                <Box height="">
                    <BoxParagraph>
                        <p>Actuellement : <br/>{meteo}</p>
                    </BoxParagraph>
                </Box>
                <Box height="">
                    <BoxParagraph>
                        <p>Vitesse du vent : {vitesseVent} km/h</p>
                    </BoxParagraph>
                </Box>
            </BoxContent>
        </Box>        
    );
}




export default MeteoBox;