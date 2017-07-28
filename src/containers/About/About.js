import React from 'react';
import injectSheet from 'react-jss';

import styles from './AboutStyles';

function About({classes}) {

    return (
        <div className={classes.container}>
            <table className={classes.table} cellPadding="7" cellSpacing="0">
                <thead>
                <th>Назва відділу</th>
                <th>Години роботи</th>
                <th>Вихідні дні</th>
                </thead>
                <tbody>
                <tr>
                    <td colSpan="3" className={classes.subtitle}>
                        Вересень &ndash; травень
                    </td>
                </tr>
                <tr>
                    <td>
                        Відділ обслуговування дітей дошкільного віку та учнів 1-4 класів
                    </td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота</td>
                </tr>
                <tr>
                    <td>Відділ обслуговування учнів 5-9 класів</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота</td>
                </tr>
                <tr>
                    <td>Відділ інформаційних технологій та електронних ресурсів</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота</td>
                </tr>
                <tr>
                    <td>Інформаційно &ndash; бібліографічний відділ</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота, неділя</td>
                </tr>
                <tr>
                    <td>Відділ реклами книги і бібліотеки та організації дозвілля користувачів</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота, неділя</td>
                </tr>
                <tr>
                    <td>Відділ комплектування фондів та каталогізування документів</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота</td>
                </tr>
                <tr>
                    <td>Відділ зберігання та реставрації фондів</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота</td>
                </tr>
                <tr>
                    <td>Науково &ndash; методичний відділ</td>
                    <td>9.00 &ndash; 18.00</td>
                    <td>субота, неділя</td>
                </tr>
                <tr>
                    <td>У неділю бібліотека працює</td>
                    <td colSpan={2}>10.00 &ndash; 17.00</td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <p>Загальний вихідний день &ndash; субота</p>
                        <p><strong>Останній понеділок місяця &ndash; санітарний день</strong></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3" className={classes.subtitle}>
                        Червень &ndash; серпень
                    </td>
                </tr>
                <tr>
                    <td><strong>Всі відділи</strong></td>
                    <td>9.00 &ndash; 17.00</td>
                    <td>субота, неділя</td>
                </tr>
                </tbody>
            </table>
            <p>Загальні вихідні дні &ndash; субота неділя</p>
            <p>Останній понеділок місяця &ndash; санітарний день</p>
            <div className={classes.eveningAbon}>
                <p>
                    Якщо ви не встигаєте завітати до нас протягом
                    робочого дня &ndash; саме для вас наша послуга &ndash;
                    &laquo;Вечірній абонемент&raquo;:
                </p>
                <img src="//lodb.org.ua/assets/images/noc.jpg" height="187" width="155"/>
            </div>
            <ol>
                <li>
                    Із 9.00 до 17.00 год. ви можете зателефонувати до бібліотеки і замовити
                    необхідні вам книжки. Про виконання замовлення вас повідомлять бібліотекарі.<br/>
                    Тел. для замовлень: 235&ndash;87&ndash;46
                </li>
                <li>
                    Із 18.00 до 20.00 год. черговий видасть вам замовлення і прийме прочитані
                    книги.
                </li>
                <li>
                    У ці години видаються <strong>тільки ті книги, на які зроблено попереднє замовлення.</strong>
                </li>
            </ol>
        </div>
    )
}

export default injectSheet(styles)(About);