export function glbFactory(path : string, x: number = 0, y: number = 0, z: number = 0) {
    const transform = new Transform({
        position: new Vector3(x, y, z),
        rotation: Quaternion.Euler(0, 0, 0),
      });
      
      const ent = new Entity("cube");
      const model = new GLTFShape(path);
      
      engine.addEntity(ent);
      ent.addComponent(transform);
      ent.addComponent(model);
      return ent;
}