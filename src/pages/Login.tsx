import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {globeOutline, iceCream, logInOutline, personCircleOutline, qrCode, qrCodeOutline } from 'ionicons/icons' ; 
import SH2 from "../assets/SH2.png"; 
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';
//import particlesOptions from "../Assets/particles.json";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
 //import Particles from "react-particles";
import { Network } from '@capacitor/network';


const INTRO_KEY = 'intro-seen';
const Login: React.FC = () => {
    const router = useIonRouter(); 
const [introSeen , SetIntroSeen] = useState(false);
const [present , dismiss] = useIonLoading();

useEffect(() => {
const CheckStorage =async () => {
    const seen = await Preferences.get({key: INTRO_KEY});
    console.log("file : login.tsx:17 CHeck Storage" , seen );
    SetIntroSeen(seen.value === 'true');
}
CheckStorage();
} , [] )


const doLOgin = async (event: any) => {
event.preventDefault(); 
 await present('Logging in');
 setTimeout( async () => {
    dismiss();
    router.push('/app', 'root');
 } , 2000)
console.log('doLOgin');

}; 
const FinishIntro = async() => {
    console.log('Finish');
    SetIntroSeen(true);
    Preferences.set({key: INTRO_KEY, value: 'true'});
}

const seeIntroAgain= () => {
SetIntroSeen(false);
Preferences.remove({key : INTRO_KEY}); 
}

const test = () => {
    router.push('/Test');
}
const map = () => {
  router.push('/map');
}
const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

const logCurrentNetworkStatus = async () => {
  const status = await Network.getStatus();
  console.log('Network status:', status);
}; 
useEffect(() => {
  // Call your function when the component is first mounted
  logCurrentNetworkStatus();
}, []);
    return (
        <>
        {!introSeen ? (
        <Intro onfinish={FinishIntro}/> 
        ) :(
        <IonPage>
           
            <IonHeader>
                <IonToolbar color = 'danger'>
                    <IonTitle>Sum2Prove</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                
            <div className='ion-text-center ion-padding' >
            <img src={SH2} alt='SH Logo' width={'70%'} />
            
            </div>
            <IonCard>
            <IonCardContent>
                <form onSubmit={doLOgin}> 
                    <IonInput mode='md' fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='HannaFrangi.hf@gmail.com'></IonInput>
               <IonInput  mode='md' className='ion-margin-top' fill='outline' label='Password' labelPlacement='floating' type='password' ></IonInput>
              <IonButton type='submit' color='danger' expand='block' className='ion-margin-top' onClick={logCurrentNetworkStatus}> Login <IonIcon icon={logInOutline} slot="end"/> </IonButton>
            <IonButton routerLink='/register' color = 'tertiary' expand='block' className='ion-margin-top'> Create Account <IonIcon icon={personCircleOutline} slot='end'/></IonButton>
            <IonButton onClick={seeIntroAgain} size='small'  type= 'button' color='warning' expand='block' className='ion-margin-top'> Watch Intro Again <IonIcon icon={logInOutline} slot="end"/> </IonButton>
            <IonButton  onClick={test} size='small'  type= 'button' color='dark' expand='block' className='ion-margin-top'>Test <IonIcon icon={iceCream} slot="end"/> </IonButton>
              <IonButton routerLink='/Qrcode' color='danger' type='button'  expand='block'  className='ion-margin-top'>Qr Code <IonIcon icon={qrCodeOutline} slot='end'/></IonButton>
                </form> 
            </IonCardContent>
           {/*  <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "autoPlay": true,
                "background": {
                  "color": {
                    "value": "#000000"
                  },
                  "image": "",
                  "position": "",
                  "repeat": "",
                  "size": "",
                  "opacity": 1
                },
                "backgroundMask": {
                  "composite": "destination-out",
                  "cover": {
                    "color": {
                      "value": "#fff"
                    },
                    "opacity": 1
                  },
                  "enable": false
                },
                "defaultThemes": {},
                "delay": 0,
                "fullScreen": {
                  "enable": true,
                  "zIndex": -1
                },
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                  "detectsOn": "window",
                  "events": {
                    "onClick": {
                      "enable": false,
                      "mode": []
                    },
                    "onDiv": {
                      "selectors": [],
                      "enable": false,
                      "mode": [],
                      "type": "circle"
                    },
                    "onHover": {
                      "enable": false,
                      "mode": [],
                      "parallax": {
                        "enable": false,
                        "force": 2,
                        "smooth": 10
                      }
                    },
                    "resize": {
                      "delay": 0.5,
                      "enable": true
                    }
                  },
                  "modes": {
                    "trail": {
                      "delay": 1,
                      "pauseOnStop": false,
                      "quantity": 1
                    },
                    "attract": {
                      "distance": 200,
                      "duration": 0.4,
                      "easing": "ease-out-quad",
                      "factor": 1,
                      "maxSpeed": 50,
                      "speed": 1
                    },
                    "bounce": {
                      "distance": 200
                    },
                    "bubble": {
                      "distance": 200,
                      "duration": 0.4,
                      "mix": false,
                      "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": []
                      }
                    },
                    "connect": {
                      "distance": 80,
                      "links": {
                        "opacity": 0.5
                      },
                      "radius": 60
                    },
                    "grab": {
                      "distance": 100,
                      "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                      }
                    },
                    "push": {
                      "default": true,
                      "groups": [],
                      "quantity": 4
                    },
                    "remove": {
                      "quantity": 2
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4,
                      "factor": 100,
                      "speed": 1,
                      "maxSpeed": 50,
                      "easing": "ease-out-quad",
                      "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": []
                      }
                    },
                    "slow": {
                      "factor": 3,
                      "radius": 200
                    },
                    "light": {
                      "area": {
                        "gradient": {
                          "start": {
                            "value": "#ffffff"
                          },
                          "stop": {
                            "value": "#000000"
                          }
                        },
                        "radius": 1000
                      },
                      "shadow": {
                        "color": {
                          "value": "#000000"
                        },
                        "length": 2000
                      }
                    }
                  }
                },
                "manualParticles": [],
                "particles": {
                  "bounce": {
                    "horizontal": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    },
                    "vertical": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.1
                      },
                      "value": 1
                    }
                  },
                  "collisions": {
                    "absorb": {
                      "speed": 2
                    },
                    "bounce": {
                      "horizontal": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
                        },
                        "value": 1
                      },
                      "vertical": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0.1
                        },
                        "value": 1
                      }
                    },
                    "enable": false,
                    "maxSpeed": 50,
                    "mode": "bounce",
                    "overlap": {
                      "enable": true,
                      "retries": 0
                    }
                  },
                  "color": {
                    "value": "#fff",
                    "animation": {
                      "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 20,
                        "delay": 0,
                        "decay": 0,
                        "sync": true
                      },
                      "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "delay": 0,
                        "decay": 0,
                        "sync": true
                      },
                      "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "delay": 0,
                        "decay": 0,
                        "sync": true
                      }
                    }
                  },
                  "groups": {
                    "z5000": {
                      "number": {
                        "value": 70
                      },
                      "zIndex": {
                        "value": 50
                      }
                    },
                    "z7500": {
                      "number": {
                        "value": 30
                      },
                      "zIndex": {
                        "value": 75
                      }
                    },
                    "z2500": {
                      "number": {
                        "value": 50
                      },
                      "zIndex": {
                        "value": 25
                      }
                    },
                    "z1000": {
                      "number": {
                        "value": 40
                      },
                      "zIndex": {
                        "value": 10
                      }
                    }
                  },
                  "move": {
                    "angle": {
                      "offset": 0,
                      "value": 10
                    },
                    "attract": {
                      "distance": 200,
                      "enable": false,
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "center": {
                      "x": 50,
                      "y": 50,
                      "mode": "percent",
                      "radius": 0
                    },
                    "decay": 0,
                    "distance": {},
                    "direction": "right",
                    "drift": 0,
                    "enable": true,
                    "gravity": {
                      "acceleration": 9.81,
                      "enable": false,
                      "inverse": false,
                      "maxSpeed": 50
                    },
                    "path": {
                      "clamp": true,
                      "delay": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 0
                      },
                      "enable": false,
                      "options": {}
                    },
                    "outModes": {
                      "default": "out",
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "random": false,
                    "size": false,
                    "speed": 5,
                    "spin": {
                      "acceleration": 0,
                      "enable": false
                    },
                    "straight": false,
                    "trail": {
                      "enable": false,
                      "length": 10,
                      "fill": {}
                    },
                    "vibrate": false,
                    "warp": false
                  },
                  "number": {
                    "density": {
                      "enable": false,
                      "width": 1920,
                      "height": 1080
                    },
                    "limit": 0,
                    "value": 200
                  },
                  "opacity": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1,
                    "animation": {
                      "count": 0,
                      "enable": false,
                      "speed": 3,
                      "decay": 0,
                      "delay": 0,
                      "sync": false,
                      "mode": "auto",
                      "startValue": "random",
                      "destroy": "none",
                      "minimumValue": 0.1
                    }
                  },
                  "reduceDuplicates": false,
                  "shadow": {
                    "blur": 0,
                    "color": {
                      "value": "#000"
                    },
                    "enable": false,
                    "offset": {
                      "x": 0,
                      "y": 0
                    }
                  },
                  "shape": {
                    "close": true,
                    "fill": true,
                    "options": {},
                    "type": "circle"
                  },
                  "size": {
                    "random": {
                      "enable": false,
                      "minimumValue": 1
                    },
                    "value": 3,
                    "animation": {
                      "count": 0,
                      "enable": false,
                      "speed": 5,
                      "decay": 0,
                      "delay": 0,
                      "sync": false,
                      "mode": "auto",
                      "startValue": "random",
                      "destroy": "none"
                    }
                  },
                  "stroke": {
                    "width": 0
                  },
                  "zIndex": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 5,
                    "opacityRate": 0.5,
                    "sizeRate": 1,
                    "velocityRate": 1
                  },
                  "destroy": {
                    "bounds": {},
                    "mode": "none",
                    "split": {
                      "count": 1,
                      "factor": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": 3
                      },
                      "rate": {
                        "random": {
                          "enable": false,
                          "minimumValue": 0
                        },
                        "value": {
                          "min": 4,
                          "max": 9
                        }
                      },
                      "sizeOffset": true,
                      "particles": {}
                    }
                  },
                  "roll": {
                    "darken": {
                      "enable": false,
                      "value": 0
                    },
                    "enable": false,
                    "enlighten": {
                      "enable": false,
                      "value": 0
                    },
                    "mode": "vertical",
                    "speed": 25
                  },
                  "tilt": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "decay": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "enable": false
                  },
                  "twinkle": {
                    "lines": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    },
                    "particles": {
                      "enable": false,
                      "frequency": 0.05,
                      "opacity": 1
                    }
                  },
                  "wobble": {
                    "distance": 5,
                    "enable": false,
                    "speed": {
                      "angle": 50,
                      "move": 10
                    }
                  },
                  "life": {
                    "count": 0,
                    "delay": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 0,
                      "sync": false
                    },
                    "duration": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                      },
                      "value": 0,
                      "sync": false
                    }
                  },
                  "rotate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "decay": 0,
                      "sync": false
                    },
                    "direction": "clockwise",
                    "path": false
                  },
                  "orbit": {
                    "animation": {
                      "count": 0,
                      "enable": false,
                      "speed": 1,
                      "decay": 0,
                      "delay": 0,
                      "sync": false
                    },
                    "enable": false,
                    "opacity": 1,
                    "rotation": {
                      "random": {
                        "enable": false,
                        "minimumValue": 0
                      },
                      "value": 45
                    },
                    "width": 1
                  },
                  "links": {
                    "blink": false,
                    "color": {
                      "value": "#ffffff"
                    },
                    "consent": false,
                    "distance": 100,
                    "enable": false,
                    "frequency": 1,
                    "opacity": 0.4,
                    "shadow": {
                      "blur": 5,
                      "color": {
                        "value": "#000"
                      },
                      "enable": false
                    },
                    "triangles": {
                      "enable": false,
                      "frequency": 1
                    },
                    "width": 1,
                    "warp": false
                  },
                  "repulse": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "enabled": false,
                    "distance": 1,
                    "duration": 1,
                    "factor": 1,
                    "speed": 1
                  }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [],
                "smooth": false,
                "style": {},
                "themes": [],
                "zLayers": 100,
                "emitters": {
                  "autoPlay": true,
                  "fill": true,
                  "life": {
                    "wait": false
                  },
                  "rate": {
                    "quantity": 1,
                    "delay": 7
                  },
                  "shape": "square",
                  "startCount": 0,
                  "size": {
                    "mode": "percent",
                    "height": 0,
                    "width": 0
                  },
                  "particles": {
                    "shape": {
                      "type": "images",
                      "options": {
                        "images": {
                          "src": "https://particles.js.org/images/cyan_amongus.png",
                          "width": 500,
                          "height": 634
                        }
                      }
                    },
                    "size": {
                      "value": 40
                    },
                    "move": {
                      "speed": 10,
                      "outModes": {
                        "default": "none",
                        "right": "destroy"
                      },
                      "straight": true
                    },
                    "zIndex": {
                      "value": 0
                    },
                    "rotate": {
                      "value": {
                        "min": 0,
                        "max": 360
                      },
                      "animation": {
                        "enable": true,
                        "speed": 10,
                        "sync": true
                      }
                    }
                  },
                  "position": {
                    "x": -5,
                    "y": 55
                  }
                },
                "motion": {
                  "disable": false,
                  "reduce": {
                    "factor": 4,
                    "value": true
                  }
                }
              }}
        /> */}
           </IonCard>
           
            </IonContent>

        </IonPage>
    ) }
        </>
    );
};

export default Login;