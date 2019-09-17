//import Dado from "./dado";

export default class Jugador {
    constructor(nombre) {
        this._nombre = nombre;
        this._pocision = 0;
    }

    get nombre() {
        return this._nombre;
    }
    get pocision() {
        return this._pocision;
    }

    _turno() {
        while (this._pocision <= 100) {
            //let lanzarDado = new Dado();
            //Esto es para que el jugador avanse;
            let lanzarDado = Math.trunc(Math.random() * 6) + 1
            switch (lanzarDado) {
                case 2:
                    this._pocision += 2;
                    break;
                case 3:
                    this._pocision += 3;
                    break;
                case 4:
                    this._pocision += 4;
                    break;
                case 5:
                    this._pocision += 5;
                    break;
                case 6:
                    this._pocision += 6;
                    break;
                default:
                    this._pocision++;
                    break;
            }
//EScaleras
        switch (this._pocision) {
            case 45:
                this._pocision += 5;
                break;
            case 35:
                this._pocision += 15;
                break;
            case 78:
                this._pocision += 8;
                break
            case 5:
                this._pocision += 6;
                break;
            default:
                this._pocision++
                break;
        }
//Serpientes
        switch (this._posicion) {
            case 20:
                this._pocision -= 18;
                break;
            case 48:
                this._pocision -= 12
                break
            case 78:
                this._pocision -= 25;
                break;
            case 97:
                this._pocision -= 50;
                break;
            default:
                this._pocision++
                break;
        }
        }

        return this._pocision
    }

}