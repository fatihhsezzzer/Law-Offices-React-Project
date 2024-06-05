import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle({ title }) { // title prop'u ekleniyor
    return (
        <div className="page-title-area page-title-area-two title-img-one">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="page-title-text">
                        <h2>{title}</h2> {/* title dinamik olarak kullanılıyor */}
                        <ul>
                            <li>
                                <Link to="/">Home</Link> {/* Link bileşeni ile ana sayfaya yönlendirme */}
                            </li>
                            <li>
                                <i className="icofont-simple-right"></i>
                            </li>
                            <li>{title}</li> {/* Burada da title kullanılıyor */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
