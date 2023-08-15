import PropTypes from 'prop-types';

const Item = ({title,amount}) => {
    // const {title,amount} = props
    return (
        <li>{title}<span>{amount}</span></li>
    );
}

Item.propTypes = {
    title:PropTypes.string.isRequired,//ห้ามระบุค่าว่าง
    amount:PropTypes.number.isRequired
}
export default Item