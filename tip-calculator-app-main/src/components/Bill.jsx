import iconDolar from '../images/icon-dollar.svg';

function Bill(props) {
  return (
    <div className="c-input__box">

      <img src={iconDolar} />
      <input type="text" name="bill" value={props.bill} onChange={
        e => { props.setBill(e.target.value) }} />

    </div>
  )
}
export default Bill