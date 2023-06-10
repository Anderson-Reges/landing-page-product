import React from 'react';

const TechSpecs: React.FC = () => {
  return (
    <div className='
      flex flex-col justify-center items-center
      py-20 gap-[2em] bg-background-2'
    >
      <div className='flex flex-col justify-center items-center gap-[1em]'>
        <h1
          className='font-bold text-4xl'
        >
          TECH SPECS
        </h1>
        <span
          className='w-52 h-3 bg-primary rounded-xl'
        ></span>
        <p className='w-[20em] text-center'>
          Get all the technical specifications right here. Everything
          you need to know to stand out from the ordinary.
        </p>
      </div>
      <div className='flex desktop:flex-row mobile:flex-col justify-evenly w-full'>
        <div>
          <h4 className='font-semibold'>General</h4>
          <p className='w-[10em]'>
            Model: 
            Seadot Arcdov
            Driver (mm):
            32
            Number of Microphones:
            1
          </p>
        </div>
        <div>
          <h4 className='font-semibold'>Battery</h4>
          <p className='w-[6em]'>
            loading time (min):
            30
            Max game time (horas):
            40
          </p>
        </div>
        <div>
          <h4 className='font-semibold'>Audio specification</h4>
          <p className='w-[10em]'>
            Driver Sensitivity at 1kHz1mW (dB):
            103.5
            Dynamic Frequency Response:
            20 Hz – 20 kHz
            Input impedance (ohms):
            32
          </p>
        </div>
        <div>
          <h4 className='font-semibold'>Control and connection</h4>
          <p className='w-[15em]'>
            Bluetooth Version:
            5.0
            bluetooth profiles:
            A2DP v1.3, AVRCP v1.6, HFP v1.7
            bluetooth emitter frequency range:
            2.4 GHz – 2.4835 GHz
            Bluetooth emitter modulation GFSK:
            GFSK, _x001E_/4DQPSK,8DPSK
            bluetooth emission power
            &lt;8 dBm
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechSpecs;