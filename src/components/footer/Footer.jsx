import React from 'react'
import Whitebgbtn from '../btns/Whitebgbtn'
import Blackbgbtn from '../btns/Blackbgbtn'

const Footer = () => {
    return (
        <div className='mt-30 w-full h-[80vh] bg-center bg-cover
    bg-[url("https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/626c138dc4375563c94d1323_Photo%20-%20Bureau.webp")]'>
            <div className='w-full h-full bg-[#00000090] text-white flex flex-col justify-center items-center'>

                {/* heading  */}
                <h2 className='text-4xl font-[maintext] '>Prenons rendez-vous !</h2>

                {/* text */}
                <p className='text-xl w-[50%] text-center'>Réservez un créneau gratuit de 15 min où nous échangerons
                    sur votre projet, vos problématiques et comment les résoudre.</p>

                    {/* button */}

                    <div className='mt-10 flex gap-5 justify-center items-center'>
                        <Whitebgbtn text={"Réservez une consultation gratuite"}/>

                        <Blackbgbtn text={"Démarrez un projet"}/>
                    </div>
            </div>
        </div>
    )
}

export default Footer