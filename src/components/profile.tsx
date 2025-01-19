import { ReactElement } from "react";

type ProfileProps = {
    width: number,
    height: number
}

export default function Profile ({width, height}: ProfileProps): ReactElement {
    const alt: string = "Katherine Johnson";
    return (
        <img 
            src="https://i.imgur.com/MK3eW3As.jpg" 
            alt={alt}
            width={width}
            height={height}            
        />
    );
}