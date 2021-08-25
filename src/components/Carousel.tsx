import { useEffect, useState } from "react";

const Carousel = () => {
    useEffect(() => {
        var elems = document.querySelectorAll(".carousel");

        M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true,
        });
    });

    setTimeout(() => {
        try {
            var elem = document.getElementById("carousel")!;
            let instance = M.Carousel.getInstance(elem);
            instance.next();
        } catch {}
    }, 1000);

    return (
        <div id="carousel" className="carousel bg-img">
            <a className="carousel-item">
                <img src="https://assets.bigcartel.com/theme_images/56236019/IMG_4077.JPG?auto=format&fit=max&w=1500" />
            </a>

            <a className="carousel-item">
                <img src="https://assets.bigcartel.com/theme_images/60876288/lobelydriver.jpg?auto=format&fit=max&w=1500" />
            </a>
        </div>
    );
};

export default Carousel;
