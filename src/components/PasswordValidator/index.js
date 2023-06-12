// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  HeadingContainer,
  Peragraph,
  InputContainer,
  PeragraphRed,
} from './styledComponents'

const PasswordValidator = () => {
  const [name, setterName] = useState('')

  const onChangeName = event => {
    setterName(event.target.value)
  }

  const final =
    name.length > 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <MainContainer>
      <PasswordContainer>
        <HeadingContainer>Password Validator</HeadingContainer>
        <Peragraph>Check how strong and secure is your password</Peragraph>
        <InputContainer onChange={onChangeName} value={name} type="password" />
        <PeragraphRed>{final}</PeragraphRed>
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
