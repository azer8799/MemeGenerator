import {Component} from 'react'
import {
  Container,
  Form,
  Heading,
  Input,
  CustomOption,
  CustomSelect,
  GenerateButton,
  CustomLabel,
  MemeContainer,
  TextContent,
  FormAndMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
  }

  changeImg = event => {
    this.setState({imgUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  changeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {imgUrl, topTextInput, bottomTextInput, optionId} = this.state
    this.setState({
      backgroundImage: imgUrl,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  render() {
    const {
      imgUrl,
      topTextInput,
      bottomTextInput,
      optionId,
      topText,
      bottomText,
      selectedFontSize,
      backgroundImage,
    } = this.state

    return (
      <Container>
        <Heading>Meme Generator</Heading>
        <FormAndMemeContainer>
          <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
            <TextContent selectedFontSize={selectedFontSize}>
              {topText}
            </TextContent>
            <TextContent selectedFontSize={selectedFontSize}>
              {bottomText}
            </TextContent>
          </MemeContainer>
          <Form onSubmit={this.onFormSubmit}>
            <CustomLabel htmlFor="img"> Image URL</CustomLabel>
            <Input
              type="text"
              id="img"
              value={imgUrl}
              onChange={this.changeImg}
            />

            <CustomLabel htmlFor="top-text"> Top Text </CustomLabel>
            <Input
              type="text"
              id="top-text"
              value={topTextInput}
              onChange={this.changeTopText}
            />

            <CustomLabel htmlFor="bottom-text"> Bottom Text</CustomLabel>
            <Input
              type="text"
              id="bottom-text"
              value={bottomTextInput}
              onChange={this.changeBottomText}
            />

            <CustomLabel htmlFor="img"> Font Size</CustomLabel>
            <CustomSelect onChange={this.changeOption} value={optionId}>
              {fontSizesOptionsList.map(eachItem => (
                <CustomOption key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </CustomOption>
              ))}
            </CustomSelect>

            <GenerateButton type="submit"> Generate</GenerateButton>
          </Form>
        </FormAndMemeContainer>
      </Container>
    )
  }
}

export default MemeGenerator
