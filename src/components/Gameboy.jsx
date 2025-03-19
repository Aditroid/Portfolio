import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Gameboy = (props) => {
    const { nodes, materials } = useGLTF('models/gameboy.glb');
    const gameboyRef = useRef();

    useGSAP(() => {
        gsap.to(gameboyRef.current.position, {
            y: gameboyRef.current.position.y + 0.05,
            duration: 1.5, 
            repeat: -1,
            yoyo: true, 
            ease: 'power1.inOut', 
        });
    });

    return (
        <group {...props} dispose={null}>
            <group ref={gameboyRef} rotation={[-Math.PI/2, 4.6, 4.8]} scale={0.001}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_Gameboy_lambert1_0.geometry}
                    material={materials.lambert1}
                />
            </group>
        </group>
    );
};

useGLTF.preload('models/gameboy.glb');

export default Gameboy;