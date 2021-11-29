import React from 'react';
const ContactUs = () => {

    // https://unicode-table.com
    const myCopyChar = '\u00A9';
    const myCopyRight = '\u00AE';
    const myHeart = '\u2665';
    const date = new Date()
    return (
        <div style={{textAlign: 'center'}}>
        <h1>Contact Page</h1>
        <span style={{color: 'limegreen', weight: 'bold'}}>Reach us @ crwn@gmail.com</span><br/>
        <span>{`${myCopyChar} ${date.getFullYear()} ${myCopyRight} All right is Reserved }` }</span>

        <div>{myHeart}</div>

        </div>
    );

}

export default ContactUs;