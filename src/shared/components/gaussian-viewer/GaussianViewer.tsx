import { useEffect, useRef } from "react";
import * as GS from "@mkkellogg/gaussian-splats-3d";

export default function GaussianViewer() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let viewer: any;
        let disposed = false;

        const init = async () => {
            viewer = new GS.Viewer({
                rootElement: containerRef.current,

                cameraUp: [0, -5, 0],

                initialCameraPosition: [1, -1, 0],

                initialCameraLookAt: [0, 0, 0],
            });

            try {
                await viewer.addSplatScene("/splats/test.ply");

                if (!disposed) {
                    viewer.start();
                }

            } catch (error) {
                console.error("Error loading gaussian splat:", error);
            }
        };

        init();

        return () => {
            disposed = true;

            if (viewer) {
                viewer.dispose();
            }
        };

    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100vh",
            }}
        />
    );
}