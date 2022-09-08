import React from "react";
import FooterInfo from "../../images/Footer.png";

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="callBack-wrapper">
                <div className="callBack-content">
                    <div>
                        <input type="text" placeholder='Ваше имя'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Ваш телефон'/>
                    </div>
                    <div className='callBack-content_button'>
                        <div>
                            <button>Заказать звонок</button>
                        </div>
                        <div>Нажимая на кнопку вы соглашаетесь <br/>
                            <span> с политикой конфеденциальности </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog-footer-wrapper">
                <img src={FooterInfo} alt=""/>
            </div>
        </div>
    )
}