import iconPerson from '../images/icon-person.svg';

function People(props) {
  return (
    <div className="c-input__box">

      <img src={iconPerson} />
      <input type="text" name="people" value={props.people} onChange={
        e => { props.setPeople(e.target.value) }} />

    </div>
  )
}
export default People