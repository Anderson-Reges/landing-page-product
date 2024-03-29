import React from 'react';

const TechSpecs: React.FC = () => {
  return (
    <div
      id='tech'
      className='
      flex flex-col justify-center items-center
      py-20 gap-[2em] bg-background-2'
      data-testid="tech-specs-container"
    >
      <div
        className='flex flex-col justify-center items-center gap-[1em]'
        data-testid="tech-specs-box-title"
      >
        <h1
          className='font-bold text-4xl'
        >
          TECH SPECS
        </h1>
        <span
          className='w-52 h-3 bg-primary rounded-xl'
        ></span>
        <p className='w-[18em] text-center'>
          Get all the technical specifications right here. Everything
          you need to know to stand out from the ordinary.
        </p>
      </div>
      <div
        className='
        flex desktop:flex-row mobile:flex-col
        justify-evenly w-full desktop:items-baseline
        mobile:items-center desktop:gap-0 mobile:gap-[2em]
        tablet:flex-row tablet:items-start tablet:px-[2em] tablet:text-sm'
        data-testid="tech-specs-box-infos"
      >
        <div>
          <h4 className='font-semibold'>General</h4>
          <p className='desktop:w-[10em] mobile:w-[10em]'>
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
          <p className='desktop:w-[6em] mobile:w-[10em]'>
            loading time (min):
            30
            Max game time (horas):
            40
          </p>
        </div>
        <div>
          <h4 className='font-semibold'>Audio specification</h4>
          <p className='desktop:w-[10em] mobile:w-[10em]'>
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
          <p className='desktop:w-[15em] mobile:w-[10em]'>
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