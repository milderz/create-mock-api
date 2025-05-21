import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";

const UserApis = ({ data }) => {
    const { user } = useUser();
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        if (user) {
            setUserID(user.id);
        }
    }, [user]);

    //   this is temporary for the hackathon, I will create a backend service to handle this

    const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6a2R2ZXlkZWxyeml5b21xamJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTI2NzUsImV4cCI6MjA2MzM2ODY3NX0.rzccTcDf4ZBij9jUb6sR0JXg0dWviKK0NPnSf_rVJ4o";
    const BASE_URL = "https://hzkdveydelrziyomqjbq.supabase.co/rest/v1/APIS";

    const handleCopyEndpoint = (id) => {
        const endpoint = `${BASE_URL}?id=eq.${id}&apikey=${ANON_KEY}`;
        navigator.clipboard.writeText(endpoint)
            .then(() => alert("Endpoint copiado al portapapeles"))
            .catch(() => alert("Error copiando el endpoint"));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "40%", margin: " 100px auto" }}>

            {data.map((api, index) => (
                userID === api.username ? (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #262626",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "var(--light-bg)",
                        }}
                    >
                        <h3>{api.name}</h3>

                        <button 
                            onClick={() => handleCopyEndpoint(api.id)} 
                            style={{ 
                                backgroundColor: "var(--accent)", 
                                color: "var(--whitte-text)",
                                padding: "8px 16px",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",

                                }}>GET ENDPOINT</button>
                    </div>
                ) : null
            ))}
        </div>
    );
};

export default UserApis;
