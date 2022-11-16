
import { render, fireEvent } from "@testing-library/react";

import "./Snowman.css";
// import img0 from "./0.png";
// import img1 from "./1.png";
// import img2 from "./2.png";
// import img3 from "./3.png";
// import img4 from "./4.png";
// import img5 from "./5.png";
// import img6 from "./6.png";

import Snowman from "./Snowman.js";

describe("Test the behaviour of Snowman.js", function(){
    test("Image component has an image source", function(){
        const {container, debug} = render(<Snowman/>);
        
        const letterZ = container.querySelector('button[value="z"]');
        const letterX = container.querySelector('button[value="x"]');
        const letterY = container.querySelector('button[value="y"]');
        const letterR = container.querySelector('button[value="r"]');
        const letterC = container.querySelector('button[value="c"]');
        const letterQ = container.querySelector('button[value="q"]');
        const letterM = container.querySelector('button[value="m"]');
        expect(container).toContainHTML('0.png');
        fireEvent.click(letterC);
        fireEvent.click(letterX);
        fireEvent.click(letterY);
        fireEvent.click(letterR);
        fireEvent.click(letterZ);
        fireEvent.click(letterQ);
        fireEvent.click(letterM);
        console.log(debug());
        expect(container).toContainHTML('6.png');
        
    });

});