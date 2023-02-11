import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders";

export class BasicScene {

    scene: Scene;
    engine: Engine;
    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene(this.engine);

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    CreateScene(engine: Engine): Scene {
        const scene = new Scene(engine);
        const camera = new FreeCamera("freecamera", new Vector3(0, 1, -5), scene);
        camera.attachControl();

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
        hemiLight.intensity = 0.5;
        const ground = MeshBuilder.CreateGround("ground", {
            width: 10,
            height: 10
        }, scene);
        const model = SceneLoader.ImportMeshAsync("", "./models/", "graveStone.glb");
        return scene;
    }
}
