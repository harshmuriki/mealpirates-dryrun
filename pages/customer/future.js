import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../../components/dashboard/layout';
import DashboardProvider from '../../components/dashboard/provider/context';

export function Future() {

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardProvider>
        <DashboardLayout>
          <div>Hi</div>
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default Future;
