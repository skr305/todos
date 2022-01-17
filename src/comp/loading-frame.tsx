import React from "react";
import ReactLoading from 'react-loading';

interface LoadingFrameProps {

};
const LoadingFrame:React.FC<LoadingFrameProps> = () => {
    return (
        <ReactLoading height={667} width={375} />
    )
};
export default LoadingFrame;