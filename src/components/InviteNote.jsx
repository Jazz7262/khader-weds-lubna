import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. D. Basheer Ahmed</h2>

                <h5 className="address mb-3">
                    H. No.: LIG - #1, NGO's Colony,
                    <br /> Near Auto Stand,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 91609 09082, <br />
                    +91 70754 1405, <br />
                    +91 81850 4931.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
