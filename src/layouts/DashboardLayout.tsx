import { Outlet, useNavigate } from "react-router-dom"
import { SideBar } from "../components/dashboard"
import { useUser } from "../hooks";
import { useEffect, useState } from "react";
import { getSession, getUserRole } from "../actions";
import { Loader } from "../components/shared/Loader";
import { supabase } from "../supabase/client";

export const DashboardLayout = () => {

  const navigate = useNavigate();
  const { isLoading, session } = useUser();
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      setRoleLoading(true);
      const session = await getSession();
      if (!session) {
        navigate("/login");
      }

      const role = await getUserRole(
        session.session?.user.id as string
      );


      if (role !== 'admin') {
        navigate('/', { replace: true });
      }

      setRoleLoading(false);
    };
    checkRole();

   
            supabase.auth.onAuthStateChange(async (event, session) => {
                if(event === 'SIGNED_OUT' || !session){
                    navigate('/login', {replace: true});
                }
            });

        
  }, [navigate]);

  if (isLoading || !session || roleLoading) return <Loader />

  return (
    <div className="flex bg-gray-100 min-h-screen font-montserrat">
      <SideBar />

      {/* Eliminamos cualquier margen o padding automático y forzamos el contenido a estar junto al sidebar */}
      <div className="w-[calc(100%-120px)] lg:w-[calc(100%-250px)] ml-[120px] lg:ml-[250px]">
        <main className="w-full p-5 pt-7 text-slate-800">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
