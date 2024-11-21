import { AuthContextProvider } from "@/context/use-auth-context"
import { FormProvider } from "react-hook-form"

type Props = {
    children: React.ReactNode
}

export default function SignUpFormProvider({ children }: Props) {
    return (
        <AuthContextProvider>
            <FormProvider>
                hello
            </FormProvider>
        </AuthContextProvider>
    )
}