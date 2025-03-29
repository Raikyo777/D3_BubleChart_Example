import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: any;
  linkCount: number = 0;

  constructor(id:any) {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt( APP_CONFIG.N /this.linkCount );
  }

  get r() {
    return 10 * this.normal() + 10;
  }

  get fontSize() {
    return (6 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.floor(APP_CONFIG.SPECTRUM.length / this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}