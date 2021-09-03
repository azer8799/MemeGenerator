// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  margin: 10px;
`

export const Input = styled.input`
  border: 1px solid grey;
  margin-bottom: 20px;
  line-height: 2;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  font-family: 'Open Sans';
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  height: 40px;
  outline: none;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background-color: #0b69ff;
  min-width: 25px;
  max-width: 150px;
  outline: none;
  cursor: pointer;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 200px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-direction: row-reverse;
  }
`

export const TextContent = styled.p`
  font-size: ${props => props.selectedFontSize}px;
  color: #ffff;
  font-weight: 600;
  font-family: 'Open Sans';
`
