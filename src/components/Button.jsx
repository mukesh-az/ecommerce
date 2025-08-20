
const Button = ({ func, children, className }) => {
  return (
    <StyledButton className={className} onClick={func}>
      {children}
    </StyledButton>
  )
}


export default Button
