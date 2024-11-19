import SignUpFormProvider from "@/components/forms/sign-up/form-provider"

type Props = {

}

export default function SignUp() {
    return (
        <div className="flex-1 py-36 md:px-16 w-full">
            <div className="flex flex-col h-full gap-3">
                <SignUpFormProvider>
                    yo
                </SignUpFormProvider>
            </div>
        </div>
    )
}