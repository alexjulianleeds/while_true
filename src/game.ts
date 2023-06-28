import { glbFactory } from "./factory";
import { elevatorFactory } from "./elevator";
import { videoFactory } from "./video";

const modArea = new Entity()

let cameraModifier = new CameraModeArea({
  area: { box: new Vector3(16, 16, 16) },
  cameraMode: CameraMode.FirstPerson,
});

modArea.addComponent(
  new Transform({
    position: new Vector3(8, 8, 8),
  })
)

modArea.addComponent(cameraModifier);
engine.addEntity(modArea);

let cube = glbFactory("models/empty_cube.glb", 8, 0, 8);
let swamp = glbFactory("models/swamp.glb", 8, 0, 8)
let bowl = glbFactory("models/bowl.glb", 8, 0, 8)

// let screen = videoFactory('https://bambinoglade.com/cone-model/7mb/7mbvidtext.m3u8')
let screen = videoFactory("https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875")

bowl.addComponent(
  new OnPointerDown(() => {
    let elevator = elevatorFactory();

    // let classId = 54;
    // let count = 0;
    // let name = "";

    // while (true) {
    //   name += count;
    //   engine.eventManager.fireEvent(
    //     new ComponentAdded(bowl, name, classId)
    //   );
    //   // log(name);
    // }
  })
);