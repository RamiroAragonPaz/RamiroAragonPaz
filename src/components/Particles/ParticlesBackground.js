import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './ParticlesBackground.scss'


const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            className="particles"
            init={particlesInit}
            options={{
                background: {
                    color: "#000000",
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    },
                },
                particles: {
                    move: {
                        center: {
                            radius: 500
                        },
                        enable: true,
                        random: true,
                        speed: 2,
                        direction: "outside",
                        
                    },
                    color: {
                        value: "ffffff"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 500,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.1,
                        },
                        value: 1,
                    },
                }
            }}
        />
    );
}

export default ParticleBackground
