import { ProfileList } from "./components/profileList";
import { PROFILES } from "./mock-data/profile";

export default function Profile() {
    return <>
        <ProfileList profiles={PROFILES} />
    </>
}