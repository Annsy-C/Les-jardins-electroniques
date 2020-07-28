import React from "react";
import Box, { BoxContent, BoxTitle, BoxImage, BoxParagraph} from "./box";

function HistoBox ({ title, description, src, alt} ) {

    return(
        <Box>
            <BoxContent>
                <BoxTitle title ={title}/>
                <BoxParagraph>{description}</BoxParagraph>
            </BoxContent>
            <BoxContent>
                <BoxImage src={src} alt={alt} size="is-16by9"/>
            </BoxContent>
        </Box>
    );
}

export default HistoBox;