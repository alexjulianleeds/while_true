export class ElevatorSystem implements ISystem {
    up;
    plane;

    constructor(plane : Entity) {
      this.plane = plane;
      this.up = true;
    }

    update() {
      // let position = Camera.instance.feetPosition;
      // let activate = this.isPlayerInLocation(position, new Vector3(8, 7.5, 8), 16);
      let activate = true;
      let transform = this.plane.getComponent(Transform);
      // let shape = this.plane.getComponent(PlaneShape);
      if (activate) {
        // shape.withCollisions = true;
        if (transform.position.y >= 15) this.up = false;
        if (transform.position.y <= 8) this.up = true;
        if (this.up) {
          let distance = Vector3.Up().scale(0.1);
          transform.translate(distance);
        } 
        // else {
        //   let distance = Vector3.Down().scale(0.1);
        //   transform.translate(distance);
        // }
      } else {
        this.up = true;
        transform.position = new Vector3(8, 0, 8);
        // shape.withCollisions = false;
      }
    }
  
    isPlayerInLocation(position: Vector3, target: Vector3, size: number) {
      let { x, y, z } = position;
      if (x < target.x || x > target.x + size) return false;
      if (y < target.y || y > target.y + size) return false;
      if (z < target.z || z > target.z + size) return false;
      return true;
    }
  }