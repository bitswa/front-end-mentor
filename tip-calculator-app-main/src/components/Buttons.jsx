function Buttons(props) {
  return (
    <div className="c-btn_box">

      <div className="c-btn" onClick={() => props.update(5 / 100)}>5%</div>
      <div className="c-btn" onClick={() => props.update(10 / 100)}>10%</div>
      <div className="c-btn" onClick={() => props.update(15 / 100)}>15%</div>
      <div className="c-btn" onClick={() => props.update(25) / 100}>25%</div>
      <div className="c-btn" onClick={() => props.update(50 / 100)}>50%</div>
      <input type="text" placeholder="Custom" value={props.custom} onChange={
        e => {
          props.setCustom(e.target.value)
          props.update(e.target.value / 100)}} />

    </div>
  )
}
export default Buttons