import './options.scss';

export default function Option() {
    return (
        <ul className='options'>
            <li><p className='option_title'>Мова</p><p className='option_desc'>Англійська</p></li>
            <li><p className='option_title'>Видавництво</p><p className='option_desc'>Transworld Digital</p></li>
            <li><p className='option_title'>Рік видання</p><p className='option_desc'>2018 рік</p></li>
            <li><p className='option_title'>Автор</p><p className='option_desc'>Брайан Мерчант</p></li>
        </ul>
    )
}