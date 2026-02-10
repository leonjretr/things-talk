"use client"
import React from 'react';
// import Headroom from "react-headroom";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({children}: WrapperProps) => {
    return (
        <>
            {/*<Headroom>*/}

            {/*</Headroom>*/}
            {children}
        </>
    );
};

export default Wrapper;