import RootLayout from "../components/layout/RootLayout";
import Body from "../components/home/Body"
import KeyFeatures from "../components/home/KeyFeatures"
import Reviews from "../components/home/Reviews"

export default function Home (){
    return (
        <RootLayout>
            <Body />
            <KeyFeatures />
            <Reviews />
        </RootLayout>
    )
}