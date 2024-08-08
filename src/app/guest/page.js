import GuestLayout from "../../components/layout/GuestLayout";
import VerificationService from "../../components/guest/home/Content"
import Body from "../../components/guest/home/Home"


export default function Home (){
    return (
        <GuestLayout>
            <Body />
            <VerificationService />
        </GuestLayout>
    )
}