import GuestLayout from "../../../components/layout/GuestLayout";
import MyCourses from "../../../components/student/courses/MyCourses";
import 'leaflet/dist/leaflet.css';

export default function DashboardPage() {
  return (
    <GuestLayout>
      <div>
        <MyCourses/>
      </div>
    </GuestLayout>
  );
}
