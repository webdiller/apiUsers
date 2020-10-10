import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

const About = () => {
    const history = useHistory();
    return (
        <div className="col-12">
            <div className="jumbotron bg-light">
                <p style={{ fontSize: 20 }}>Добро пожаловать в мини веб приложение</p>
                <p className="lead">Это демонстрационный вариант работы react. Здесь используется:
                <span style={{ textDecoration: 'underline', marginLeft: 5 }}>react v16.13.1, </span>
                    <span style={{ textDecoration: 'underline', marginLeft: 5 }}>react-router-dom v5.2.0 </span>
                .</p>
                <hr className="my-4" />
                <button onClick={() => { history.goBack() }} className="btn btn-primary btn-md" to="/"><BsArrowLeft style={{ marginRight: 10, fontSize: 20 }} />Вернуться назад</button>
            </div>
        </div>
    );
};

export default About;