import SideNav from '@/app/ui/dashboard/sidenav';
<<<<<<< HEAD
 
=======

>>>>>>> 6ee1da485abf7df8017e0952223ab801b134751a
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
<<<<<<< HEAD
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
=======
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
>>>>>>> 6ee1da485abf7df8017e0952223ab801b134751a
