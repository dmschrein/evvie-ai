"use client"
import React, { useState } from 'react'

type InitialValuesProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
}

const authContext = React.createContext(InitialValues)

const { Provider } = authContext // provider coomponent is used to wrap parts of the application that need access to the context values

// functional component that accepts 'children' as a prop. 'children' represents the nested components that will have access to the context values
// useState - hook is used to create 'currentStep' state variable and 'setCurrentStep' function to update 'currentStep' 
// custom hook to easily access the context values
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep
  )
  const values = {
    currentStep,
    setCurrentStep,
  }
  return <Provider value={values}>{children}</Provider>
}

export const useAuthContextHook = () => {
  const state = React.useContext(authContext)
  return state
}