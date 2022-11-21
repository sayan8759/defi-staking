import React, { Component } from 'react';
import Particles from 'react-tsparticles';


class ParticleSettings extends Component {
    render() {
        return (
            <div>
                <Particles 
                    height='100vh' width='100vw'
                    id='tsparticles'
                    options={
                        {
                            background: {
                                color: '#00203FFF'
                            },
                            fpslimit:60,
                            interactivity: {
                                detect_on: 'canvas',
                                events: {
                                    onClick:{
                                        enable: 'true',
                                        mode: 'push'    
                                    },
                                    onHover: {
                                        enable: 'true',
                                        mode: 'repulse'
                                    },
                                    resize: 'true',

                                },
                                modes: {
                                    bubble: {
                                      distance: 400,
                                      duration: 2,
                                      opacity: 0.8,
                                      size: 90,
                                    },
                                    push: {
                                      quantity: 4,
                                    },
                                    repulse: {
                                      distance: 200,
                                      duration: 0.4,
                                    },
                                  },
                            },
                            particles: {
                                color: {
                                  value: "#02f2ee",
                                },
                                links: {
                                  color: "#02f2ee",
                                  distance: 150,
                                  enable: true,
                                  opacity: 0.5,
                                  width: 1,
                                },
                                collisions: {
                                  enable: true,
                                },
                                move: {
                                  direction: "none",
                                  enable: true,
                                  outMode: "bounce",
                                  random: false,
                                  speed: 3,
                                  straight: false,
                                },
                                number: {
                                  density: {
                                    enable: true,
                                    value_area: 800,
                                  },
                                  value: 80,
                                },
                                opacity: {
                                  value: 0.5,
                                },
                                shape: {
                                  type: "square",
                                },
                                size: {
                                  random: true,
                                  value: 10,
                                },
                            },
                        }
                    }
                />
            </div>
        );
    }
}

export default ParticleSettings;