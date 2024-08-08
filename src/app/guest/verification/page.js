import VerifyDocumentGuest from "../../../components/guest/verification/VerifyDocument";
import GuestLayout from "../../../components/layout/GuestLayout";

export default function DashboardPage() {
  return (
    <GuestLayout>
      <div>
        <VerifyDocumentGuest />
      </div>
    </GuestLayout>
  );
}
