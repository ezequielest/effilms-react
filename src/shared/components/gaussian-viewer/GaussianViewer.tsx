import { useEffect, useRef, useState } from "react";
import * as GS from "@mkkellogg/gaussian-splats-3d";
import * as THREE from "three";


type Vector3 = [number, number, number];


type CameraView = {
    name: string;
    position: Vector3;
    target: Vector3;
};


type Hotspot = {

    id: string;

    label: string;

    description?: string;

    initialPoint: Vector3;

    positionCamera: Vector3;

    target: Vector3;

    duration?: number;

    icon?: string;

};



// Easing cinematográfico
function easeInOutCubic(t: number) {

    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

}

interface Gaussian {
    url: string
}




export default function GaussianViewer({url}: Gaussian) {


    const containerRef =
        useRef<HTMLDivElement>(null);


    const viewerRef =
        useRef<any>(null);



    const animationRef =
        useRef<number | null>(null);


    const hotspotAnimationRef =
        useRef<number | null>(null);




    const [autoRotate, setAutoRotate] =
        useState(false);



    const [hotspotPositions, setHotspotPositions] =
        useState<
            Record<string,{x:number;y:number}>
        >({});






const hotspots: Hotspot[] = [

    {
        id: "centro",

        label: "Centro",

        initialPoint: [1,-0.1,1],

        positionCamera: [2,-0.8,2],

        target: [1,-0.1,1],

        duration: 2500
    },
    {
        id: "itaim",

        label: "Itaim II",

        initialPoint: [0.5, -0.5, 0.5],

        positionCamera: [1.8, -0.8, 1.6],

        target: [0.5, -0.5, 0.5],
        
        duration: 2500
    }

];


    const views: CameraView[] = [

        {
            name:"Frente",
            position:[-1,-1,0],
            target:[0,0,0],
        },


        {
            name:"Lateral",
            position:[-1,-1,1],
            target:[0,0,0],
        },


        {
            name:"Superior",
            position:[-1,0,2],
            target:[0,0,0],
        }

    ];

    useEffect(()=>{


        if(!containerRef.current)
            return;

        let disposed = false;

        const init = async()=>{



            const viewer =
                new GS.Viewer({

                    rootElement:
                        containerRef.current!,


                    cameraUp:[
                        0,
                        -1,
                        0
                    ],


                    initialCameraPosition:[
                        1,
                        -1,
                        0
                    ],


                    initialCameraLookAt:[
                        0,
                        0,
                        0
                    ]

                });




            viewerRef.current =
                viewer;



            if(viewer.controls){

                viewer.controls.maxPolarAngle =
                    1.2;

            }





            try {

                console.log('url ', url)
                await viewer.addSplatScene(
                    url
                );



                if(disposed)
                    return;



                setupSky();



                viewer.start();



                startHotspotTracking();





            } catch(error){


                console.error(
                    "Error loading gaussian splat:",
                    error
                );


            }



        };




        init();






        return ()=>{


            disposed = true;



            if(animationRef.current){

                cancelAnimationFrame(
                    animationRef.current
                );

            }



            if(hotspotAnimationRef.current){

                cancelAnimationFrame(
                    hotspotAnimationRef.current
                );

            }



            if(viewerRef.current){

                viewerRef.current.dispose();

                viewerRef.current = null;

            }


        };



    },[]);









    const setupSky = ()=>{


        const viewer =
            viewerRef.current;



        if(
            !viewer ||
            !viewer.threeScene
        )
            return;




        const loader =
            new THREE.TextureLoader();




        loader.load(

            "/sky/sky.jpg",

            (texture)=>{


                texture.mapping =
                    THREE.EquirectangularReflectionMapping;



                texture.colorSpace = THREE.SRGBColorSpace;



                viewer.threeScene.background =
                    texture;



            }

        );


    };









    const startHotspotTracking = ()=>{


        const animate = ()=>{


            updateHotspots();



            hotspotAnimationRef.current =
                requestAnimationFrame(
                    animate
                );


        };



        animate();


    };









    const updateHotspots = ()=>{


        const viewer =
            viewerRef.current;



        if(
            !viewer ||
            !containerRef.current
        )
            return;




        const camera =
            viewer.camera;



        const width =
            containerRef.current.clientWidth;


        const height =
            containerRef.current.clientHeight;





        const positions:
            Record<string,{x:number;y:number}>
            = {};




        hotspots.forEach((spot)=>{


            const vector =
                new THREE.Vector3(
                    ...spot.initialPoint
                );



            vector.project(camera);




            positions[spot.id]={

                x:
                    (vector.x+1)
                    *
                    width
                    /
                    2,


                y:
                    (-vector.y+1)
                    *
                    height
                    /
                    2

            };


        });




        setHotspotPositions(
            positions
        );


    };









    const toggleRotation = ()=>{


        const viewer =
            viewerRef.current;



        if(!viewer)
            return;



        const controls =
            viewer.controls;



        if(!controls)
            return;




        controls.autoRotate =
            !controls.autoRotate;



        controls.autoRotateSpeed =
            1.2;




        setAutoRotate(
            controls.autoRotate
        );


    };









    const flyTo = (

        position:Vector3,

        target:Vector3,

        duration=1800

    )=>{


        const viewer =
            viewerRef.current;



        if(!viewer)
            return;



        const camera =
            viewer.camera;


        const controls =
            viewer.controls;



        if(!controls)
            return;




        const startPosition={

            x:camera.position.x,
            y:camera.position.y,
            z:camera.position.z

        };



        const startTarget={

            x:controls.target.x,
            y:controls.target.y,
            z:controls.target.z

        };




        const start =
            performance.now();





        const animate=(time:number)=>{


            const progress =
                Math.min(
                    (time-start)
                    /
                    duration,
                    1
                );



            const eased =
                easeInOutCubic(
                    progress
                );




            camera.position.set(

                startPosition.x+
                (
                    position[0]
                    -
                    startPosition.x
                )
                *
                eased,


                startPosition.y+
                (
                    position[1]
                    -
                    startPosition.y
                )
                *
                eased,


                startPosition.z+
                (
                    position[2]
                    -
                    startPosition.z
                )
                *
                eased

            );




            controls.target.set(

                startTarget.x+
                (
                    target[0]
                    -
                    startTarget.x
                )
                *
                eased,


                startTarget.y+
                (
                    target[1]
                    -
                    startTarget.y
                )
                *
                eased,


                startTarget.z+
                (
                    target[2]
                    -
                    startTarget.z
                )
                *
                eased

            );



            controls.update();




            if(progress<1){

                animationRef.current =
                    requestAnimationFrame(
                        animate
                    );

            }



        };




        animationRef.current =
            requestAnimationFrame(
                animate
            );


    };









    return (

        <div

            className="gaussian-container"

            style={{

                position:"relative",
                width:"100%",
                height:"100vh"

            }}

        >


            <div

                ref={containerRef}

                style={{

                    width:"100%",
                    height:"100%"

                }}

            />






            {
                hotspots.map((spot)=>{


                    const pos =
                        hotspotPositions[spot.id];



                    if(!pos)
                        return null;



                    return (

                        <button

                            key={spot.id}

                            onClick={()=>{

                                flyTo(
                                    spot.positionCamera,
                                    spot.target,
                                    spot.duration ?? 1800
                                );

                            }}


                            style={{

                                position:"absolute",

                                left:pos.x,

                                top:pos.y,

                                transform:
                                "translate(-50%,-50%)",

                                borderRadius:"8px",

                                padding:"10px",

                                cursor:"pointer",

                                border:"0"

                            }}

                        >

                            {spot.label}


                        </button>


                    );


                })

            }







            <div

                style={{

                    position:"absolute",

                    bottom:20,

                    left:20,

                    display:"flex",

                    gap:10

                }}

            >


                <button

                    className="btn btn-primary"

                    onClick={toggleRotation}

                >

                    {
                        autoRotate
                        ?
                        "Detener rotación"
                        :
                        "Rotar modelo"
                    }


                </button>





                {
                    views.map(view=>(

                        <button

                            key={view.name}

                            className="btn btn-primary"

                            onClick={()=>{

                                flyTo(
                                    view.position,
                                    view.target
                                );

                            }}

                        >

                            {view.name}


                        </button>


                    ))

                }


            </div>



        </div>

    );

}