function Main() {
  return (
    <main className="c-main">
      <p className="c-main__title">You've used <span>815 GB</span> of your storage</p>
      <input type="range" value="75" />
      <div className="c-main__gb-info">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </main>
  )
}
export default Main