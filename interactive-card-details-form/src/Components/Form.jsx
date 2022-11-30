import { useState } from 'react'
import tw from 'twin.macro'
import { Input, InputWrapper, FormWrapper, Label, Button } from '../styles/'

export default function Form({}) {
    const [isFocus, setIsFocus] = useState([
        { id: 'card-holder-name', focus: false },
        { id: 'card-number', focus: false },
        { id: 'card-exp-mm', focus: false },
        { id: 'card-exp-yy', focus: false },
        { id: 'card-cvv', focus: false },
    ])

    const getFocus = (id) => isFocus.filter((obj) => obj.id === id)[0].focus
    const handleFocus = (e) => {
        setIsFocus((prev) => [
            ...prev.filter((obj) => obj.id !== e.target.id),
            { ...prev.find((obj) => obj.id === e.target.id), focus: true },
        ])
    }

    const handleBlur = (e) => {
        setIsFocus((prev) => [
            ...prev.filter((obj) => obj.id !== e.target.id),
            { ...prev.find((obj) => obj.id === e.target.id), focus: false },
        ])
    }
    return (
        <>
            <FormWrapper>
                <Label htmlFor="card-holder-name">CARDHOLDER NAME</Label>
                <InputWrapper focus={getFocus('card-holder-name')}>
                    <Input
                        id="card-holder-name"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="e.g. Jane Appleseed"
                    />
                </InputWrapper>

                <Label htmlFor="card-number">CARD NUMBER</Label>
                <InputWrapper focus={getFocus('card-number')}>
                    <Input
                        id="card-number"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        size="12"
                        placeholder="e.g. 1234 5678 9123 000"
                    />
                </InputWrapper>

                <div className="flex w-[90%] flex-row  justify-between">
                    <div className="w-[55%] md:w-[45%]">
                        <Label htmlFor="card-exp-date">EXP. DATE (MM/YY)</Label>
                        <div className="flex flex-row" id="card-exp-date">
                            <InputWrapper focus={getFocus('card-exp-mm')}>
                                <Input
                                    id="card-exp-mm"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    size="3"
                                    placeholder="MM"
                                />
                            </InputWrapper>

                            <InputWrapper
                                focus={getFocus('card-exp-yy')}
                                css={tw`ml-2`}
                            >
                                <Input
                                    id="card-exp-yy"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    size="3"
                                    placeholder="YY"
                                />
                            </InputWrapper>
                        </div>
                    </div>
                    <div className="w-[45%] md:w-[60%]">
                        <Label htmlFor="card-cvv" css={tw`ml-2 md:ml-4`}>
                            CVV
                        </Label>
                        <InputWrapper
                            focus={getFocus('card-cvv')}
                            css={tw`ml-2 md:ml-4`}
                        >
                            <Input
                                id="card-cvv"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="e.g. 123"
                            />
                        </InputWrapper>
                    </div>
                </div>
                <Button>Confirm</Button>
            </FormWrapper>
        </>
    )
}
