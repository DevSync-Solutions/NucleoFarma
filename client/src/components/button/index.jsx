import "./button.css"

const Button = ({ children, className, type, onClick }) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export { Button }