import React, { useEffect } from "react";
import "../styles/BackToTopBtn.css";
import $ from "jquery";

function BackToTopBtn() {
    useEffect(() => {
        $(document).on("scroll", () => {
            if (window.scrollY > 100) {
                $(".back-to-top-btn").addClass("active");
            } else {
                $(".back-to-top-btn").removeClass("active");
            }
        });
    }, []);

    function handleClick() {
        $("html, body").animate({ scrollTop: 0 });
        window.location.hash = "header";
    }

    return (
        <button className="back-to-top-btn" onClick={handleClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="icon"
                fill="#f9f097"
            >
                <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
            </svg>
        </button>
    );
}

export default BackToTopBtn;
