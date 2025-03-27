import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    /* CameraResultType es un enum, así
    la librería expone el set de opciones que son permitidas.
    Así el usuario no tiene chance a equivocarse cuando asigne el valor
    de la propiedad:*/
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front
  });
};
