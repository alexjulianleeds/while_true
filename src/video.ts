export function videoFactory(path: string, x: number = 0, y: number = 0, z: number = 0) {
    // #1
const myVideoClip = new VideoClip(
    path
  )
  
  // #2
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  // #3
  const myMaterial = new Material()
  myMaterial.albedoTexture = myVideoTexture
  myMaterial.roughness = 1
  myMaterial.specularIntensity = 0
  myMaterial.metallic = 0
  
  
  // #4
  const screen = new Entity()
  screen.addComponent(new PlaneShape())
  screen.addComponent(
    new Transform({
      position: new Vector3(8, 1, 8),
    })
  )
  screen.addComponent(myMaterial)
  screen.addComponent(
    new OnPointerDown(() => {
      myVideoTexture.playing = !myVideoTexture.playing
    })
  )
  engine.addEntity(screen)
  
  // #5
  myVideoTexture.play()
  return screen;
}