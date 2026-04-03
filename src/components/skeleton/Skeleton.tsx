import React from 'react';

const Skeleton = () => {

    const skelet = [];
    const skeletonWidth = ["w-6/12", "w-3/12", "w-7/12", "w-8/12", "w-9/12"]

    for (let i = 0; i < 20; i++) {
        const random = Math.floor((Math.random() * skeletonWidth.length));
        skelet.push(<div key={i} className={`h-4 my-2 ${skeletonWidth[random]} rounded-md animate-pulse bg-gray-300`}></div>)
    }
    return (
        <div className={"m-6"}>
            {skelet}
        </div>
    );
};

export default Skeleton;