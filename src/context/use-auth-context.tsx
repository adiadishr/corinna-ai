'use client'

import React, { useState } from 'react'

type InitialValueProps = {
    currentStep: number
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValueProps = {
    currentStep: 1,
    setCurrentStep: () => undefined
}

const authContext = React.createContext(InitialValues)

const { Provider } = authContext