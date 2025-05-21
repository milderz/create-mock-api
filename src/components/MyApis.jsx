import { useEffect, useState } from "react";
import UserApis from "./UserApis";
import { ClerkProvider } from "@clerk/clerk-react";

const MyApis = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
  
    useEffect(() => {
      fetch("https://hzkdveydelrziyomqjbq.supabase.co/rest/v1/APIS?select=*", {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6a2R2ZXlkZWxyeml5b21xamJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTI2NzUsImV4cCI6MjA2MzM2ODY3NX0.rzccTcDf4ZBij9jUb6sR0JXg0dWviKK0NPnSf_rVJ4o",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6a2R2ZXlkZWxyeml5b21xamJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTI2NzUsImV4cCI6MjA2MzM2ODY3NX0.rzccTcDf4ZBij9jUb6sR0JXg0dWviKK0NPnSf_rVJ4o",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Error al hacer fetch");
          console.log("Respuesta:", res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log("Datos obtenidos:", data);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    }, []);
  
    if (error) return <div>Error: {error}</div>;
  
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <h2 style={{ margin: "4rem auto", width: "100%", textAlign:"center", fontSize: "4.3rem"}}>MyAPIS</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <UserApis data={data} />
            
            </div>
        </ClerkProvider>
    );
};

export default MyApis;