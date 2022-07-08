import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import TodayContent from '../../components/customer/today';
import DashboardLayout from '../../components/dashboard/layout';
import DashboardProvider from '../../components/dashboard/provider/context';


function CustomerDashboard({ user, error, isLoading }) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardProvider>
        <DashboardLayout>
          <div>
            <div>
              <TodayContent title="Your Pick" subtitle="Willys Mexicana Grill" />
            </div>
          </div>
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default CustomerDashboard;
