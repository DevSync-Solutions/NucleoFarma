import "./logo.css"

const Logo = () => {
  return (
    <a href="/">
      <div className="logo">
        <img src="./src/assets/logo.png" alt="Logo Nucleo Farma"></img>
        <div className="div-logo">
          <p>Droguería</p>
          <h2>Nucleo Farma</h2>
        </div>
      </div>
    </a>
  )
}

export default Logo