import React, { useEffect, useState } from 'react'
import '../SectionThree/sectionthree.css'
import axios from 'axios'


export const SectionThree = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://67a38fe431d0d3a6b783fb99.mockapi.io/Skills")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className='sec-three' id='skills'>
            <h1 style={{ textAlign: 'center' }}>Skills</h1>
            <p style={{ textAlign: 'center', color: '#555', fontFamily: 'Montserrat', paddingBottom:'30px' }}>Here are some of my skills on which I have been working on for the past 1 years.</p>
            <div className="sec-three-container">
                <div className="sec-three-skills">
                    {data.map((item) => (
                        <div key={item.id} className='map-div'>
                            <img src={item.image} className='map-img'/>
                            <p className='map-text'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
