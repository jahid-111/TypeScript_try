import React from 'react';

interface CustomProps {
    title :  string;
    message : string;
}

const ReactTypeScript = (props  : CustomProps ) => {
    return (
        <>
               <h3>{props?.title}</h3>
               <p>{props?.message   ? props?.message : "Message not Available"}</p>
        </>
    );
};

//I know it's Error. But Error Comes to Learn. (😉🤗) 
export default ReactTypeScript;