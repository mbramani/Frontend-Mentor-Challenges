import { useState } from 'react'
import tw from 'twin.macro'
import { Input, InputWrapper, FormWrapper, Label, Button } from '../styles/'

export default function Form({}) {
    const [inputField, setInputField] = useState([
        { id: 'card-holder-name', focus: false, value: '' },
        { id: 'card-number', focus: false, value: '' },
        { id: 'card-exp-mm', focus: false, value: '' },
        { id: 'card-exp-yy', focus: false, value: '' },
        { id: 'card-cvv', focus: false, value: '' },
    ])

    const getFocus = (id) => inputField.find((obj) => obj.id === id).focus
    const getValue = (id) => inputField.find((obj) => obj.id === id).value

    const handleFocus = (e) =>
        setInputField((prev) => [
            ...prev.filter((obj) => obj.id !== e.target.id),
            { ...prev.find((obj) => obj.id === e.target.id), focus: true },
        ])

    const handleBlur = (e) =>
        setInputField((prev) => [
            ...prev.filter((obj) => obj.id !== e.target.id),
            { ...prev.find((obj) => obj.id === e.target.id), focus: false },
        ])

    const handleChange = (e) =>
        setInputField((prev) => [
            ...prev.filter((obj) => obj.id !== e.target.id),
            {
                ...prev.find((obj) => obj.id === e.target.id),
                value: e.target.value,
            },
        ])
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
                        value={getValue('card-holder-name')}
                        onChange={handleChange}
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
                        value={getValue('card-number')}
                        onChange={handleChange}
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
                                    value={getValue('card-exp-mm')}
                                    onChange={handleChange}
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
                                    value={getValue('card-exp-yy')}
                                    onChange={handleChange}
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
                                value={getValue('card-cvv')}
                                onChange={handleChange}
                            />
                        </InputWrapper>
                    </div>
                </div>
                <Button>Confirm</Button>
            </FormWrapper>
        </>
    )
}
