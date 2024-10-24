import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DetailScene, ListScene } from "@/scenes";
import { AppLayout } from "@/layout";
import { switchRoutes } from "./routes";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={switchRoutes.list} element={<ListScene />} />
                <Route path={switchRoutes.detail} element={<DetailScene />} />
                <Route path="*" element={<Navigate to={switchRoutes.list} />} />
              </Routes>
            </AppLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
